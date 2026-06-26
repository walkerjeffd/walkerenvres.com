#!/bin/bash

rsync -zav _site/ jeff@walkerenvres.com:/var/www/home/ --delete
