#abc
#!/bin/bash
exec < /dev/tty

# Get the current branch name
branch_name="dummy-branch"
# Get the current branch name
# branch_name=$(git branch | grep "*" | sed "s/\* //")

# Get the name of the branch that was just merged
# reflog_message=$(git reflog -1)
# merged_branch_name=$(echo $reflog_message | cut -d" " -f 4 | sed "s/://")

# Set space as the delimiter
IFS='-'

#Read the split words into an array based on space delimiter
read -a branch_name_arr <<< "$branch_name"
branch_type="${branch_name_arr[0]}"

#Count the total words
echo "${branch_type}"

# if the merged branch was master - don't do anything
if [[ $branch_type = "soma" ]]; then
   echo "major"
elif [[ $branch_type = "somi" ]]; then
   echo "minor"  
elif [[ $branch_type = "sopa" ]]; then
   echo "patch"     
fi

if [[ $branch_name = "dummy-branch" ]]; then
   echo "${branch_name}"
   git add .
   git commit -am "Version changed to a"
   git push origin "${branch_name}"
   echo "done"
fi   