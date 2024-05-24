  该命令在Linux系统是没有问题的，但在Windows 却报错："object_detection/protos/*.proto: Invalid argument". ，后来发现是“*.”在windows系统是无法识别的，解决的方法是，使用git命令,不要用CMD命令，当然这需要你Windows系统安装了git了，Git for Windows下载地址：https://git-scm.com/download/win，安装完后，使用git命令重试protoc object_detection/protos/*.proto --python_out=. 就没有问题啦



安装pb
npm uninstall  protobufjs
npm uninstall --location=global <package>
npm view protobufjs
npm view protobufjs versions

安装
node nodejs

安装protobufjs
npm install --location=global  protobufjs@7.2.3

安装pbjs & pbts
npm install --location=global  protobufjs-cli@1.1.1
