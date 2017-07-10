---
layout: post
title: "Backing up a Postgres Database Locally and to AWS S3 Using logrotate and pg_dump"
date: 2017-07-10
---

Backing up databases to a remote source can sometimes be a time-consuming or daunting process. Fortunately, there exists a nice solution with Postgres with logrotate, pg_dump, and the AWS S3 CLI. I implemented this solution, and it has been working great, to back up a Mattermost (read Slack clone) database.

In this example, we will be creating a daily backup and posting it to an AWS S3 bucket we have created. First, if you're not familiar with logrotate, Rackspace has a great [beginner's guide](https://support.rackspace.com/how-to/understanding-logrotate-utility/) I recommend checking out. Its also useful for understanding all of the config options that you have at your disposal as well.

Taken from the guide above:
> The logrotate utility makes log rotation easy. “Log rotation” refers to the practice of archiving an application’s current log, starting a fresh log, and deleting older logs. The system usually runs logrotate once a day, and when it runs it checks rules that can be customized on a per-directory or per-log basis.

The "hard" part of this whole automated backup process is creating the logrotate config file. First, create a file in the /etc/logrotate.d/ directory. I've named mine mm-bkup.

Here is what my mm-bkup file looks like, with annotations, to help better explain what each config option is doing. Once again, this is file is /etc/logrotate.d/mm-bkup and can have different config options depending on what you want.

```
# where to archive the logs (backups)
/var/backups/postgres/postgres.pgdump.gz {
  daily    # how often to rotate (backup)
  missingok    # ignores error if the directory does not exist
  rotate 7    # how many archived logs (backups) are kept locally before logrotate starts deleting the older ones
  nocompress    # old versions of log files are not compressed
  create 640 postgres postgres    # sets permissions on the newly created log file using [mode] [owner] [group] syntax
  postrotate    # start script for after the log file is created
  sudo -u postgres pg_dump mattermost > /var/backups/postgres/postgres.pgdump    # dump the mattermost database via pg_dump
  gzip -9f /var/backups/postgres/postgres.pgdump    # gzip (compress) the db dump at maximum compression
  /usr/bin/s3cmd sync /var/backups/postgres/* s3://YOUR_S3_URL    # post the backups to your s3 bucket
  endscript    # end script for after the log file is created
}
```

And that's all there is to it! The /var/backups/postgres directory will locally have the most recent, uncompressed backups and our S3 bucket will have a larger history of compressed backups.

For further reading on some of the tools used here, check out these links:
* [Understanding logrotate utility](https://support.rackspace.com/how-to/understanding-logrotate-utility/)
* [Local Postgres Backup with Logrotate Example](https://scottlinux.com/2014/11/05/create-nightly-postgres-backups-with-logrotate/)
* [Pg_dump Documentation](https://www.postgresql.org/docs/9.3/static/app-pgdump.html)
* [Gzip CLI Examples](https://www.lifewire.com/example-uses-of-the-linux-gzip-command-4078675)
* [S3 Command Line Tool](https://github.com/s3tools/s3cmd)
