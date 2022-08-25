# ack-cli

个人使用的经常使用的查看aliyun ack 信息的命令的优化和展现

基本原理
1. 依赖的还是aliyun cli 或者是对应的api
2. 命令行的构建依赖nodejs的commander

## command design


* ack-cli cd cluster ${cluster-id}
context switch to cluster

* ack-cli cd node ${node-name} -c ${cluster-id}
context switch cluster and node

* ack-cli list node -c ${cluster-id}
list node in context cluster

* ack-cli list pod -node ${node-name}
list pod in context node

* ack-cli inspect node ${node-name}
show detail of node

* ack-cli inspect pod ${pod-name}
show detail of pod

ack-cli summary cluster ${cluster-id}

defaul log
cni: {type: flannel/terway, version: 111}
csi: {type: csi/flexvolume, version: 222}

node pools list

pool-name, pool-type, status, size


