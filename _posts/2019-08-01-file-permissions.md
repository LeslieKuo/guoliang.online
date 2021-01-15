---
layout: post
categories: misc
title: Understanding Linux File Permissions
---

### View the file permission
'''ls -lha'''

### Detail of directory names 
In the first column of the output, there are 10 characters that represent the permission bits.

### Basics

| File type |    Meaning    |
|:---------:|:-------------:|
|     d     |   Directory   |
|     -     |  Regular File |
|     l     | Symbolic Link |

### Chmod Command Syntax and Options
`chmod [who] [+,-,=] [permissions] filename`
eg:
`chmod g+w ~/group-project.txt`

##### Permission
| Permission bits | Meaning |
|:---------------:|:-------:|
|        r        |   Read  |
|        w        |  Write  |
|        x        | eXecute |

##### Target user categories
| who(Letter) | Meaning |
|:-----------:|:-------:|
|      u      |   user  |
|      g      |  group  |
|      o      |  others |
|      a      |   all   |

 Notes: The owner of the file is referred to as the user

##### Operator
| Operator |        Meaning        |
|:--------:|:---------------------:|
|     +    |   grant permissions   |
|     -    | take away permissions |
|     =    |    copy permission    |

 **Notes:**
1. copying permissions is possible:`chmod g=u ~/group-project.txt`

2. Multiple permissions can be specified by separating them with a comma, as in the following example:
`chmod g+x, o-rw, a+x ~/group-project-files/`
3. If no category is specified, the permission is aimed to all permission categories.`a+x` = `+x`

4. The -R option applies the modification to the permissions recursively to the directory specified and to all of its contents.
`chmod -R +w,g=rw,o-rw, ~/group-project-files/`

### Set permissions through octal notation
Disregarding the first bit, each bit that is occupied with a `-` can be replaced with a 0 while `r`, `w`, or `x` is represented by a 1.

| Binary | Octal | Permission |
|:------:|:-----:|:----------:|
|   000  |   0   |     ---    |
|   001  |   1   |     --x    |
|   010  |   2   |     -w-    |
|   011  |   3   |     -wx    |
|   100  |   4   |     r--    |
|   101  |   5   |     r-x    |
|   110  |   6   |     rw-    |
|   111  |   7   |     rwx    |

### Restore Default File Permissions
The default permissions for files on a Unix system are often 600 or 644. Permissions of 600 mean that the owner has full read and write access to the file, while no other user can access the file. Permissions of 644 mean that the owner of the file has read and write access, while the group members and other users on the system only have read access.
```s
chmod 600 ~/roster.txt
chmod 644 ~/gigs.txt
```
For executable files, the equivalent settings would be 700 and 755 which correspond to 600 and 644 except with execution permission.
```
chmod 700 ~/generate-notes.py
chmod 755 ~/regenerate-notes.py
```
### Restrict File Access: Remove all Group and World Permissions
There are a number of cases where administrators and users should restrict access to files, particularly files that contain passwords and other sensitive information. The configuration files for msmtp and Fetchmail (~/.msmtprc and ~/.fetchmailrc) are two common examples.

You can remove all access to these files with commands in one of the following forms:
```
chmod 600 .msmtprc
chmod g-rwx,o-rwx .fetchmail
```
************
*参考文献*

[Modify File Permission with chmod](https://www.linode.com/docs/tools-reference/tools/modify-file-permissions-with-chmod/)
[File Permissions in Linux/Unix with Example](https://www.guru99.com/file-permissions.html)
[Permissions](http://linuxcommand.org/lc3_lts0090.php)
