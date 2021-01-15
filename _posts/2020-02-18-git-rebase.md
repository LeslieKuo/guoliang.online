


When you forget to new a branch and make some changes in the existing branch.

you can do this

```
git stash.  // save changes to stash and recover the branch
git checkout master//
git pull --rebase // prevent merge the remote commit and local commit. And the commit line will be a string.
git checkout -b xxxx. // Now new your branch
git stash pop // restore the stash to new branch

```
Example below
```
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (13a30db*) % g stash    Saved working directory and index state WIP on (no branch): 13a30db separate iam
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (13a30db$) % gco master
Previous HEAD position was 13a30db separate iam
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (master$=) % gl -r     
Already up to date.
Current branch master is up to date.
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (master$=) % gcb fix-IAM-redundant-logging
Switched to a new branch 'fix-IAM-redundant-logging'
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (fix-IAM-redundant-logging$) % git stash pop
Auto-merging lib/iam-token-manager.js
Auto-merging lib/iam-pap-manager.js
On branch fix-IAM-redundant-logging
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   lib/iam-pap-manager.js
        modified:   lib/iam-token-manager.js
        modified:   lib/iam-util.js
        modified:   lib/version-manager.js
        modified:   routes/index.js

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (db9304d2e0680ec9e9882aa76423420b708f67c8)
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (fix-IAM-redundant-logging*) % git status   
On branch fix-IAM-redundant-logging
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   lib/iam-pap-manager.js
        modified:   lib/iam-token-manager.js
        modified:   lib/iam-util.js
        modified:   lib/version-manager.js
        modified:   routes/index.js

```




## Squash commits with git rebase

https://github.com/wprig/wprig/wiki/How-to-squash-commits

Before PR merge, squash the commits
If you're familiar with Terminal, you can do the following:

Make sure your branch is up to date with the master branch.
Run git rebase -i master.
You should see a list of commits, each commit starting with the word "pick".
Make sure the first commit says "pick" and change the rest from "pick" to "squash". -- This will squash each commit into the previous commit, which will continue until every commit is squashed into the first commit.
Save and close the editor.
It will give you the opportunity to change the commit message.
Save and close the editor again.
Then you have to force push the final, squashed commit: git push --force-with-lease origin.
Squashing commits can be a tricky process but once you figure it out, it's really helpful and keeps our repo concise and clean.

```
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (IAM-errorLog-show-once$=) % git checkout master                 
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (master$=) % git pull -r        
remote: Enumerating objects: 12, done.
remote: Counting objects: 100% (12/12), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 12 (delta 8), reused 12 (delta 8), pack-reused 0
Unpacking objects: 100% (12/12), done.
From github.ibm.com:C2C-HybridConnect/HCDataManager
 * [new branch]      swati_34068_read_api_cpu_memory -> origin/swati_34068_read_api_cpu_memory
Already up to date.
Current branch master is up to date.
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (master$=) % git checkout Robert was lucky to escape with just a broken foot after being squashed against a fence by a car.
Whole neighborhoods have been                                 
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (master$=) % git checkout IAM-errorLog-show-once      
Switched to branch 'IAM-errorLog-show-once'
Your branch is up to date with 'origin/IAM-errorLog-show-once'.
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (IAM-errorLog-show-once$=) % git checkout -                        
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (master$=) % git checkout -
Switched to branch 'IAM-errorLog-show-once'
Your branch is up to date with 'origin/IAM-errorLog-show-once'.
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (IAM-errorLog-show-once$=) % git rebase -i master       
[detached HEAD bace46d] Only Iam status changes log error
 Date: Tue Feb 18 23:39:52 2020 +0800
 4 files changed, 53 insertions(+), 25 deletions(-)
Successfully rebased and updated refs/heads/IAM-errorLog-show-once.
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (IAM-errorLog-show-once$<>) % git log             
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (IAM-errorLog-show-once$<>) % 
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (IAM-errorLog-show-once$<>) % git log --graph --pretty=oneline
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (IAM-errorLog-show-once$<>) % git push --forceEnumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 12 threads.
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 1.01 KiB | 1.01 MiB/s, done.
Total 7 (delta 6), reused 0 (delta 0)
remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
remote: detect-secrets-stream (beta) ver=164-1ac7e673b9acf31ed1ba86a8422cf59cb8a848be FAQ: https://ibm.biz/detect-secrets-stream-faq
remote: 
remote: Successfully send push metadata.
remote: Push info collect pre-receive hook finished within 3 seconds.
To github.ibm.com:C2C-HybridConnect/HCDataManager.git
 + f753eb3...bace46d IAM-errorLog-show-once -> IAM-errorLog-show-once (forced update)
guoliang@guoliangs-MacBook-Pro:~/my-workspace/metering/repo/HCDataManager (IAM-errorLog-show-once$=) % 
```
