import 'package:flutter/material.dart';

class User {
  final String id;
  final String name;
  final String email;
  final String address;
  final String product;
  /*final int quantity;
  final double price;
  final double tax;
  final double total;*/

  User({
    required this.id,
    required this.name,
    required this.email,

    required this.address,
    required this.product,
    /*required this.quantity,
    required this.price,
    required this.tax,
    required this.total*/
  });

  /*factory User.fromJson(Map<String, dynamic> json){
    return User(
        id: json['userId'],
        name: json['id'],
        email: json['title']
        address: address,
        product: product,
        quantity: quantity,
        price: price,
        tax: tax,
        total: total
    );
  }*/

}
