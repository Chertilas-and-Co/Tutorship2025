git pull --recurse-submodules
hugo
sudo rm -rf /var/www/html/*
cp -r public/* /var/www/html/
sudo nginx -t
