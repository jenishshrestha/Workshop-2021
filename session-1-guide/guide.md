# Guide to install WordPress in your local installation

#### Local server

Local server is an application installed in your computer that provides same environment as a web host’s server. You will need to install one of these application in your computer.

1. [MAMP pro](https://www.mamp.info/en/windows/) (Mac & Windows)
2. [XAMPP](https://www.apachefriends.org/index.html) (Windows, Mac, Linux)
3. [WampServer](https://www.apachefriends.org/index.html) (Windows)
4. [Laragon](https://laragon.org/) (Windows) (recommended)
5. [LocalWp](https://localwp.com/) (Mac, Windows, Linux) (This will make your life easier)

After succesfull installation open and run apache and mysql.

#### Download Wordpress

Go to [wordpress.org](https://wordpress.org/download/) and download latest version of wordpress.

For MAMP pro, XAMPP, Wamp and laragon:

1. Go to installation folder and paste the downloaded zip file inside **www** folder and extract the zip file.
2. Rename the folder to your project name (eg: workshop).

LocalWp installs wordpress and creates database on one-click, no need to follow below steps.

#### Database

A database is a structured, organized set of data. WordPress uses MySQL as its database management system. MySQL is a software used to create databases, store and get data when requested.

###### Create a database

For MAMP, XAMPP, Wamp and laragon:

1. Open your browser and go to **http://localhost/phpmyadmin/**
2. Login to phpmyadmin (By default username is root and password is empty).
3. Click on databases tab next to SQL.
   1. Give a Database name
   1. Select utf8mb4_unicode_ci from the download
4. Click create (Empty database will be created).

#### Install Wordpress

1. In browser, go to **http://localhost/workshop**. (Default url should look like this but laragon, MAMP pro, LocalWp can beautify the url to something like **http://workshop.local/**)
2. Follow the steps for installation.
   1. Database name: "name of the database that you created"
   2. Username: "root"
   3. Password is empty
   4. Database Host: "localhost"
   5. Table prefix: "wp\_"
