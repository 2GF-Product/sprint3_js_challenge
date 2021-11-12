import 'package:flutterCrudUser/data/dummy_users.dart';
import 'package:flutterCrudUser/models/user.dart';
import 'package:flutterCrudUser/provider/users.dart';
import 'package:flutterCrudUser/routes/app_routes.dart';
import 'package:flutter/material.dart';
import 'package:flutterCrudUser/widgets/user_tile.dart';
import 'package:provider/provider.dart';

class UserList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final Map<String, User> users = DUMMY_USERS;

    return Scaffold(
      appBar: AppBar(
        title: Text('Insert user data'),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.add),
            onPressed: () {
              Navigator.of(context).pushNamed(
                AppRoutes.USER_FORM,
              );
            },
          ),
        ],
      ),
      body: Column(children: [
        Expanded(
          child: Container(

            child: ListView.builder(
                itemCount: users.length,
                itemBuilder: (ctx, i) => Text(''),
          ),
        ),
        ),
        Container(
          height: 60,
          width: MediaQuery.of(context).size.width ,
          child: ElevatedButton.icon(

            onPressed: () {
              Navigator.of(context).pushNamed(
                AppRoutes.USER_FORM,
              );
              // Respond to button press
            },
            icon: Icon(Icons.add, size: 18),
            label: Text("Create Invoice"),
          ),
        ),


        ],)

    );
  }
}
