package com.yonyou.dao.entity;


import lombok.Data;

@Data
public class Bugs {

    public String bugid;                //问题编码
    public String areaCode;             //所属客户编码
    public String areaName;             //所属客户名字
    public String sysCode;              //所属系统编码
    public String sysName;              //所属系统名字
    public String poplv;                //问题等级
    public String popmessage;           //问题描述
    public String popreceiverCode;      //问题接收人编码
    public String popreceiverName;      //问题接收人名称
    public String popflag;              //问题标识位

}
