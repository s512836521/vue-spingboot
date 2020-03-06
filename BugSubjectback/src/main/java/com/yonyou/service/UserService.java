package com.yonyou.service;

import com.yonyou.dao.entity.User;

import java.util.List;

public interface UserService {
    List<User> queryAllTestNames();
    List queryAllReceiverNames();
    List queryAllSysNames();
}
