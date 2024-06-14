#!/bin/bash

# Corresponding Angular : Node.js versions
base_node="18"
versions="
  7.0.7 : 8.17.0
  9.0.4 : 10.24.1
  10.0.0 : 10.24.1
  11.0.0 : 10.24.1
  12.0.0 : 12.22.12
  13.0.0 : 12.22.12
  14.0.0 : 16.20.2
  15.0.0 : 18.20.3
  16.0.0 : 18.20.3
  17.0.0 : 18.20.3
  18.0.0 : 22.3.0
"

# Function to create Angular project for a specific version
create_project() {
  local angular_version="$1"
  local node_version="$2"
  local project_name="angular-v${angular_version%%.*}"
  
  # skip if the project already exists
  if [ -d "$project_name" ]; then
    echo "Project for Angular version $angular_version already exists, skipping."
    return
  fi

  echo "Creating Angular project for version $angular_version with Node.js $node_version..."

  # create .nvmrc file
  source ~/.nvm/nvm.sh
  nvm install $base_node
  nvm use $base_node
  # Create a new Angular project
  npx -p @angular/cli@$angular_version ng new $project_name --skip-install --routing=false --style=css --no-strict

  # Navigate to the project directory
  cd $project_name

  # copy "app" folder from outside
  echo "$node_version" > .nvmrc
  # check if node version is installed
  nvm install $node_version
  nvm use
  npm install --save angular-email-editor
  npm install
  
  cd ..

  echo "Project for Angular version $angular_version created successfully."
}

# Link the library globally
# cd ../angular-email-editor
# ng build angular-email-editor
# npm link dist/angular-email-editor
# cd -

# Convert the versions string into an array
IFS=$'\n' read -rd '' -a versions_array <<< "$versions"

# Create Angular projects for each version
for version in "${versions_array[@]}"; do
    IFS=" :" read -r angular_version node_version <<< "$version"
    create_project "$angular_version" "$node_version"
done

echo "All projects created successfully."