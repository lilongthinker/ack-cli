# ack-cli

个人使用的经常使用的查看aliyun ack 信息的命令的优化和展现

基本原理
1. 依赖的还是aliyun cli 或者是对应的api
2. 命令行的构建依赖nodejs的meow(设计优雅) https://www.npmjs.com/package/meow
    input Non-flag args
    flags 
    参考视频 https://www.bilibili.com/video/BV12Y4y1P7x4?spm_id_from=333.880.my_history.page.click&vd_source=87c0c8adb93057a72c71570d3ea9bb8b




## command design - sub command 

### cd
```bash
ack-cli cd cluster ${cluster-id}
```
> context switch to cluster

aliyun cs list all

```bash
ack-cli cd node ${node-name} -c ${cluster-id}
```

context switch cluster and node

### list 
>ack-cli ls cluster

>ack-cli ls node -c ${cluster-id}

list node in context cluster

list node --filter gpu --label-filter

list node --show-labels

>ack-cli ls pod -node ${node-name}

list pod in context node

### inspect
>ack-cli inspect node ${node-name}

show detail of node

>ack-cli inspect pod ${pod-name}

show detail of pod
### summary
ack-cli summary cluster ${cluster-id}

defaul log
cni: {type: flannel/terway, version: 111}
csi: {type: csi/flexvolume, version: 222}

node pools list

| pool-name | pool-type | status | node-count | cpu-request/limit/usage | mem-request/limit/usage |
| --------- | --------- | ------ | ---------- | ----------------------- | ----------------------- |
| pool-1 | normal/elastic/managed | status | node-count | cpu-request/limit/usage | mem-request/limit/usage |
### events
> ack-cli events --level=warn

### metrics

### logging

### cluster-in
slb list

ingress-controller - ingress class list

### cluster-out
nat
