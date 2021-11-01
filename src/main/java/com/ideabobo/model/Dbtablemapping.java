package com.ideabobo.model;
import com.alibaba.fastjson.JSON;
public class Dbtablemapping {
	public static Object parseStringModel(String value, String table) {
		Object object = null;
		switch (table) {
			case "wct_address": object = JSON.parseObject(value, Address.class); break;
			case "wct_bill": object = JSON.parseObject(value, Bill.class); break;
			case "wct_city": object = JSON.parseObject(value, City.class); break;
			case "wct_dingzuo": object = JSON.parseObject(value, Dingzuo.class); break;
			case "wct_fuwu": object = JSON.parseObject(value, Fuwu.class); break;
			case "wct_good": object = JSON.parseObject(value, Good.class); break;
			case "wct_line": object = JSON.parseObject(value, Line.class); break;
			case "wct_message": object = JSON.parseObject(value, Message.class); break;
			case "wct_notice": object = JSON.parseObject(value, Notice.class); break;
			case "wct_posts": object = JSON.parseObject(value, Posts.class); break;
			case "wct_replay": object = JSON.parseObject(value, Replay.class); break;
			case "wct_room": object = JSON.parseObject(value, Room.class); break;
			case "wct_shop": object = JSON.parseObject(value, Shop.class); break;
			case "wct_type": object = JSON.parseObject(value, Type.class); break;
			case "wct_user": object = JSON.parseObject(value, User.class); break;
			case "wct_vip": object = JSON.parseObject(value, Vip.class); break;
			case "wct_youhuijuan": object = JSON.parseObject(value, Youhuijuan.class); break;
		}
		return object;
}
public static Object getModelByTable(String table) {
	Object object = null;
	switch (table) {
			case "wct_address": object = new Address(); break;
			case "wct_bill": object = new Bill(); break;
			case "wct_city": object = new City(); break;
			case "wct_dingzuo": object = new Dingzuo(); break;
			case "wct_fuwu": object = new Fuwu(); break;
			case "wct_good": object = new Good(); break;
			case "wct_line": object = new Line(); break;
			case "wct_message": object = new Message(); break;
			case "wct_notice": object = new Notice(); break;
			case "wct_posts": object = new Posts(); break;
			case "wct_replay": object = new Replay(); break;
			case "wct_room": object = new Room(); break;
			case "wct_shop": object = new Shop(); break;
			case "wct_type": object = new Type(); break;
			case "wct_user": object = new User(); break;
			case "wct_vip": object = new Vip(); break;
			case "wct_youhuijuan": object = new Youhuijuan(); break;
		}
		return object;
	}
}
