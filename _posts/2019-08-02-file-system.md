---
layout: post
title: "filesystem hierarchy standard"
categories: misc
---
## Detail of directory names 
* **/opt** stands for optional (as in optional add-on packages).
* **/bin** stands for binary (contains executables used by the OS).
* **/lib** stands for library (contains shared libraries used by filesystem and for booting, probably used by the executables in bin)
* **/proc** stands for processes.
* **/root** means root user.
* **/home** holds the home sub-directories for any non-root users.
* **/dev** stands for device (holds special and device files).
* **/tmp** stands for temporary.
* **/srv** stands for serve.
* **/mnt** stands for mount point (mount a temporary filesystem here).
* **/include** contains #include files, i.e. header files (e.g., stdio.h).
* **/var** stands for variable
* **/etc** stands for etcetera. The name is inherited from the earliest Unixes, which is when it became the spot to put config-files.
* **/usr** stands for Unix System Resources(Source)
************
### /opt VS /usr/local
> Use /usr/local for things that would normally go into /usr, or are overriding things that are already in /usr. 
> Use /opt for things that install all in one directory, or are otherwise special.

*参考文献*
[Filesystem Hierarchy Standard](http://www.pathname.com/fhs/)
[重点参考 FHS group 2.3.html](http://www.pathname.com/fhs/pub/fhs-2.3.html)
[https://wiki.debian.org/FilesystemHierarchyStandard](https://wiki.debian.org/FilesystemHierarchyStandard)
