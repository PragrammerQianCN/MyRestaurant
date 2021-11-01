package com.ideabobo.service;

import com.ideabobo.model.Dingzuo;

public interface DingzuoMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Dingzuo record);

    int insertSelective(Dingzuo record);

    Dingzuo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Dingzuo record);

    int updateByPrimaryKey(Dingzuo record);
}