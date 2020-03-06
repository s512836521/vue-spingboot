package com.yonyou.dao.mapper;

import com.yonyou.dao.entity.User;

import java.util.List;

public interface UserMapper {
    List<User> queryAllTestNames();
    List queryAllReceiverNames();
    List queryAllSysNames();
}
