/*
import 'dart:math';

import 'package:flutterCrudUser/data/dummy_users.dart';
import 'package:flutterCrudUser/models/user.dart';
import 'package:flutter/cupertino.dart';

class Users with ChangeNotifier {
  final Map<String, User> _items = {...DUMMY_USERS};

  List<User> get all {
    return [..._items.values];
  }

  int get count {
    return _items.length;
  }

  User byIndex(int i) {
    return _items.values.elementAt(i);
  }

  void put(User user) {
    if (user == null) {
      return;
    }

    if (user.id != null &&
        user.id.trim().isNotEmpty &&
        _items.containsKey(user.id)) {
      _items.update(user.id, (_) => user);
    } else {
      // inserir caso nao esteja dentro
      final id = Random().nextDouble().toString();
      _items.putIfAbsent(
          id,
          () => User(
                id: user.id,
                name: user.name,
                email: user.email
                */
/*avatarUrl: user.avatarUrl,
                address : user.address,
                Product: user.Product,
                Quantity: user.Quantity,
                Price: user.Price,
                Tax: user.Tax,
                Total: user.Total,*//*

              ));
    }

    notifyListeners();
  }

  void remove(User user) {
    if (user != null && user.id != null) {
      _items.remove(user.id);
      notifyListeners();
    }
  }
}
*/
