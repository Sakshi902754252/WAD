ifconfig
touch sakshi.txt
cat sakshi.txt
nano sakshi.txt
scp sakshi.txt vagrant@ipadress:/home/vagrant


docker pull openjdk
docker images
docker run --name java -it -d openjdk
docker ps
docker exec -it java jshell
/exit
docker ps
docker stop id
docker container rm id

sudo snap install microstack --beta
snap list microstack 
sudo microstack init --auto --control
microstack.openstack --version
microstack.openstack image list
microstack.openstack flavour list
to get the IP address use command: hostname -I
dashboard URL is https://<ip-address> or
https://<ip-address>/dashboard or https://<ip-address>horizon 
username for dashboard is 'admin'
below command is for getting dashboard password : sudo snap get microstack config.credentials.keystone-password




