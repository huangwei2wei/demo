import { _decorator, Component } from 'cc';
import protobufjs from 'protobufjs';
import protoMsg from './protoMsg.js';
const { ccclass, property } = _decorator;

@ccclass('Hw')
export class Hw extends Component {
    start() {
        console.log(protobufjs);
        console.log(protoMsg);
        
        var msg: protoMsg.account.AccountLoginMsg = new protoMsg.account.AccountLoginMsg();
        msg.accountName = "accountName+";
        msg.passWord = "123456";
        msg.nickname = "nickname";
        msg.channel = 2;
        msg.clientModel = "king";
        var a = protoMsg.account.AccountLoginMsg.encode(msg).finish();

        console.log(a);

        // var msg :account.AccountLoginMsg = new account.AccountLoginMsg();
        // msg.accountName=accountName+"";
        // msg.passWord="123456";
        // msg.nickname="nickname";
        // msg.channel=2;
        // msg.clientModel="king";
        // RequestHandler.sendRequest(ProtocolId.MAIN_ACCOUNT, ProtocolId.ACCOUNT_Login, account.AccountLoginMsg.encode(msg ).finish());


    }

    update(deltaTime: number) {

    }
}


