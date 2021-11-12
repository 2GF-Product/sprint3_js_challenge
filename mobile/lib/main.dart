import 'package:flutterCrudUser/provider/users.dart';
import 'package:flutterCrudUser/routes/app_routes.dart';
import 'package:flutterCrudUser/views/home.dart';
import 'package:flutterCrudUser/views/signin.dart';
import 'package:flutterCrudUser/views/signup.dart';
import 'package:flutterCrudUser/views/user_form.dart';
import 'package:flutterCrudUser/views/user_list.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Invoice App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      routes: {
        AppRoutes.HOME: (_) => SignIn(),
        AppRoutes.USER_FORM: (_) => UserForm(),
        AppRoutes.SIGNIN: (_) => SignIn(),
        AppRoutes.SIGNUP: (_) => SignUp(),
        AppRoutes.USER_LIST: (_) => UserList()
      },
    );
  }
}
