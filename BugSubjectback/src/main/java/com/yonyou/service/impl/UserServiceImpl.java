package com.yonyou.service.impl;

import com.yonyou.dao.entity.User;
import com.yonyou.dao.mapper.UserMapper;
import com.yonyou.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> queryAllTestNames() {
//        log.info("/queryAllUsers start...");
        return userMapper.queryAllTestNames();
    }

    @Override
    public List queryAllReceiverNames() {
        return userMapper.queryAllReceiverNames();
    }

    @Override
    public List queryAllSysNames() {
        return userMapper.queryAllSysNames();
    }
}
