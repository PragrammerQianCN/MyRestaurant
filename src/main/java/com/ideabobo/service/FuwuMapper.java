package com.ideabobo.service;

import com.ideabobo.model.Fuwu;

public interface FuwuMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Fuwu record);

    int insertSelective(Fuwu record);

    Fuwu selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Fuwu record);

    int updateByPrimaryKey(Fuwu record);
}