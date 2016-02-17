# scq
Our main repo for the SCQ senior project.

## Installing:

Make sure you have python3 and [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) installed on your computer. Then run:

```
make build
```

This will install all of the pip modules as well as the

## Running:

To run the server, make sure you have rethinkDB is up.

```
make serve
```

## Installing (Hard Way):
We are using virtual environments to manage our dependencies and make sure they are the same between dev environments. If you don't have a virtualenv setup for this project, this is how to do it.

To setup virtualenvs in general on your computer, do the following:
```
brew install nodejs
sudo easy_install pip
sudo pip install virtualenvwrapper
export WORKON_HOME=~/Envs
source /usr/local/bin/virtualenvwrapper.sh
```

To setup our specific environment:
```
mkvirtualenv scq
```

Whenever you are going to work on the project to ensure that we are all using the same dependencies:
```
workon scq
```

Add the following to ~/.bashrc (or zshrc if you use one):

```
export WORKON_HOME=$HOME/Envs
source /usr/local/bin/virtualenvwrapper.sh
```

Then source it (bashrc example below):
```
source ~/.bashrc
```

Then go to the project and run this command in your project directory to install the dependencies.
```
make build
```
you will likely be asked for sudo privileges to install all needed packages

## Install [rethinkdb]( https://rethinkdb.com/docs/install/):

On Mac:

```
brew update && brew install rethinkdb
```

[On Linux](https://www.rethinkdb.com/docs/install/ubuntu/):

Copy and past the entire codeblock:

```
source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
wget -qO- http://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
sudo apt-get update
sudo apt-get install rethinkdb
```

## API Documentation

User Register

Register as a user (must be CU affiliated)
```
POST /register
```
Example usage; file must contain username & password:
```
curl --form "username=identiKeyUser&password=identiKeyPass" http://localhost:8000/register
```
Pass in desired user information to finalize registration
```
POST /register/culdap
```
Example usage for student; file must contain basic user information:
```
curl --form "fileupload=@my-file.txt" http://localhost:8000/register/culdap
```

User Information

List user information
```
GET /api/me
```
Example usage:
```
curl -u username:password http://localhost:8000/api/me
```
Parameter:
| Field               | Type          | Description                    |
| ------------------- |:-------------:| ------------------------------:|
| username            | String        | The Users-Username             |
| password            | String        | The Users-Password             |

Change user information
```
POST /api/me
```
Example usage:
```
curl -d "native_language=English" http://localhost:8000/api/me
```
Parameter:
| Field               | Type          | Description                    |
| ------------------- |:-------------:| ------------------------------:|
| email               | String        | The Users-email                |
| status              | String        | The Users-Academic Year        |
| dob                 | String        | The Users-Date of Birth        |
| native_language     | String        | The Users-Native Language      |
| gender              | String        | The Users-Gender               |
| ethnicity           | String        | The Users-Ethnicty             |
| major               | String[]      | The Users-Major                |
| minor               | String[]      | The Users-Minor                |
| departments         | String[]      | The Users-Departments          |
| courses             | String[]      | The Users-Courses Enrolled     |
| courses_taught      | String[]      | The Users-Courses Taught       |
| primary_affiliation | String[]      | The Users-Affiliation to CU    |

User Surveys

User Response
