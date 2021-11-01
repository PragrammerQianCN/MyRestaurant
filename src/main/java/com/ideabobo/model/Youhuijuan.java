package com.ideabobo.model;

import java.io.Serializable;

public class Youhuijuan implements Serializable {
    private Integer id;

    private Integer total;

    private Integer extime;

    private Integer sid;

    private Integer uid;

    private Integer typeid;

    private Integer fulluse;

    private String ndate;

    private String extimestr;

    private String username;

    private String statecn;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Integer getExtime() {
        return extime;
    }

    public void setExtime(Integer extime) {
        this.extime = extime;
    }

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getTypeid() {
        return typeid;
    }

    public void setTypeid(Integer typeid) {
        this.typeid = typeid;
    }

    public Integer getFulluse() {
        return fulluse;
    }

    public void setFulluse(Integer fulluse) {
        this.fulluse = fulluse;
    }

    public String getNdate() {
        return ndate;
    }

    public void setNdate(String ndate) {
        this.ndate = ndate == null ? null : ndate.trim();
    }

    public String getExtimestr() {
        return extimestr;
    }

    public void setExtimestr(String extimestr) {
        this.extimestr = extimestr == null ? null : extimestr.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getStatecn() {
        return statecn;
    }

    public void setStatecn(String statecn) {
        this.statecn = statecn == null ? null : statecn.trim();
    }
}