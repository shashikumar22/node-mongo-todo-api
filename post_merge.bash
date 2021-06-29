#abc
#!/bin/bash
exec < /dev/tty

# 3

DEVELOP_BRANCH='sof-task'
MAJOR_BRANCH_PREFIX="som"
FEATURE_BRANCH_PREFIX="sof"
PATCH_BRANCH_PREFIX="sop"
APPCENTER_OWNER_NAME="madhur-switchedon"
ANDROID_APP_NAME="switchedOn-1"
IOS_APP_NAME="switchedOn"
APPCENTER_API_KEY="31c1ef69e19f089e85cbefc0b61af2eef35c3830"

# https://openapi.appcenter.ms/#/build/builds_create

# Get the current branch name
# branch_name="dummy-branch"
# branch_name="develop"
# Get the current branch name
branch_name=$(git branch | grep "*" | sed "s/\* //")

# Get the name of the branch that was just merged
# reflog_message=$(git reflog -1)
# merged_branch_name=$(echo $reflog_message | cut -d" " -f 4 | sed "s/://")

# last_commit_sha=$(git rev-parse HEAD)
last_commit_sha="8f7ffa878a812e7cb29774c330c9b5bcdd96b1b1"

echo "${last_commit_sha}"

# Set space as the delimiter
IFS='-'

#Read the split words into an array based on space delimiter
read -a branch_name_arr <<< "$branch_name"
branch_type="${branch_name_arr[0]}"

#Count the total words
echo "${branch_type}"

# if the merged branch was master - don't do anything
if [[ $branch_name = $DEVELOP_BRANCH ]]; then
   #Increment the version
   if [[ $branch_type = $MAJOR_BRANCH_PREFIX ]]; then
      echo "major"
   elif [[ $branch_type = $FEATURE_BRANCH_PREFIX ]]; then
      echo "minor"  
   elif [[ $branch_type = $PATCH_BRANCH_PREFIX ]]; then
      echo "patch"
   else
      echo "here nothing"     
   fi

   # commit and push
   echo "${branch_name}"
   git add .
   git commit -am "Version changed to 23"
   git push origin "${branch_name}"
   echo "done"
fi   

 
#Create a android build in appcenter
response=$(curl -X POST "https://api.appcenter.ms/v0.1/apps/${APPCENTER_OWNER_NAME}/${IOS_APP_NAME}/branches/develop/builds" -H  "accept: application/json" -H  "X-API-Token: ${APPCENTER_API_KEY}" -H  "Content-Type: application/json" -d "{  \"sourceVersion\": \"${last_commit_sha}\",  \"debug\":false}")
echo "${response}"