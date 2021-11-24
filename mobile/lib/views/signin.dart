import 'dart:convert';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutterCrudUser/models/user.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:http/http.dart' as http;

import 'package:shared_preferences/shared_preferences.dart';
import 'home.dart';
class SignIn extends StatefulWidget {
  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
 // late Future<User> futureUser;

  final _formKey = GlobalKey<FormState>();
  late String email, password;
  bool isLoading=false;
  TextEditingController _emailController=new TextEditingController();
  TextEditingController _passwordController=new TextEditingController();
  GlobalKey<ScaffoldState>_scaffoldKey=GlobalKey();

  @override
  void initState() {
    super.initState();
   // futureUser = fetchUser();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
        body: SingleChildScrollView(
      child: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        child: Stack(
          children: <Widget>[

            /*FutureBuilder<User>(
            future: futureUser,
            builder: (context, snapshot){
            if (snapshot.hasData){
              return  Text(snapshot.data!.name);
            }else if (snapshot.hasError){
              return Text('${snapshot.error}');
            }

            return const CircularProgressIndicator();
            },
        ),*/

            Container(
              width: double.infinity,
              height: double.infinity,
              child: Image.asset(
                "assets/background.jpg",
                fit: BoxFit.fill,
              ),
            ),
            Container(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                 /* Center(
                      child: Image.asset(
                    "assets/logo.png",
                    height: 30,
                    width: 30,
                    alignment: Alignment.center,
                  )),*/
                  SizedBox(
                    height: 13,
                  ),
                  Text(
                    "Welcome",
                    style: GoogleFonts.roboto(
                        textStyle: TextStyle(
                            fontSize: 27,
                            color: Colors.white,
                            letterSpacing: 1)),
                  ),
                  SizedBox(
                    height: 5,
                  ),
                  Container(
                    width: 180,
                    child: Text(
                      "Invoice Generator app",
                      textAlign: TextAlign.center,
                      style: GoogleFonts.roboto(
                        textStyle: TextStyle(
                            color: Colors.white54,
                            letterSpacing: 0.6,
                            fontSize: 11),
                      ),
                    ),
                  ),
/*                  SizedBox(
                    height: 40,
                  ),
                  Text(
                    "Sign In",
                    textAlign: TextAlign.center,
                    style: GoogleFonts.roboto(
                      textStyle: TextStyle(
                        color: Colors.white,
                        letterSpacing: 1,
                        fontSize: 23,
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text(
                        "✅",
                        textAlign: TextAlign.center,
                        style: GoogleFonts.roboto(
                          textStyle: TextStyle(
                            color: Colors.white70,
                            letterSpacing: 1,
                            fontSize: 17,
                          ),
                        ),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 30,
                  ),*/
                  Form(
                    key: _formKey,
                    child: Container(
                      margin:
                          EdgeInsets.symmetric(vertical: 10, horizontal: 45),
                      child: Column(
                        children: <Widget>[
                          TextFormField(
                            style: TextStyle(
                              color: Colors.white,
                            ),
                            controller: _emailController,
                            decoration: InputDecoration(
                              enabledBorder: UnderlineInputBorder(
                                  borderSide: BorderSide(color: Colors.white)),
                              hintText: "Email",
                              hintStyle: TextStyle(
                                  color: Colors.white70, fontSize: 15),
                            ),
                            onSaved: (val) {
                              email = val as String;
                            },
                          ),
                          SizedBox(
                            height: 16,
                          ),
                          TextFormField(
                            style: TextStyle(
                              color: Colors.white,
                            ),
                            controller: _passwordController,
                            decoration: InputDecoration(
                              enabledBorder: UnderlineInputBorder(
                                  borderSide: BorderSide(color: Colors.white)),
                              hintText: "Password",
                              hintStyle: TextStyle(
                                  color: Colors.white70, fontSize: 15),
                            ),
                            onSaved: (val) {
                              email = val as String;
                            },
                          ),
                          SizedBox(
                            height: 30,
                          ),
                          Stack(
                            children: [
                              GestureDetector(
                                onTap: () {
                                  Navigator.pushReplacementNamed(context, "/user_list");
                                  if(isLoading)
                                    {
                                      return;
                                    }
                                  if(_emailController.text.isEmpty||_passwordController.text.isEmpty)
                                  {
                                  //  _scaffoldKey.currentState.showSnackBar(SnackBar(content:Text("Please Fill all fileds")));
                                    return;
                                  }
                                  login(_emailController.text,_passwordController.text);
                                  setState(() {
                                    isLoading=true;
                                  });
                                  //Navigator.pushReplacementNamed(context, "/home");
                                },
                                child: Container(
                                  alignment: Alignment.center,
                                  width: double.infinity,
                                  padding: EdgeInsets.symmetric(
                                      vertical: 10, horizontal: 0),
                                  height: 50,
                                  decoration: BoxDecoration(
                                    border: Border.all(color: Colors.white),
                                    borderRadius: BorderRadius.circular(50),
                                  ),
                                  child: Text(
                                    "LOGIN",
                                    textAlign: TextAlign.center,
                                    style: GoogleFonts.roboto(
                                        textStyle: TextStyle(
                                            color: Colors.white,
                                            fontSize: 16,
                                            letterSpacing: 1)),
                                  ),
                                ),
                              ),
                              Positioned(child: (isLoading)?Center(child: Container(height:26,width: 26,child: CircularProgressIndicator(backgroundColor: Colors.green,))):Container(),right: 30,bottom: 0,top: 0,)

                            ],
                          )

                        ],
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
  /*                Text(
                    "OR",
                    style: TextStyle(fontSize: 14, color: Colors.white60),
                  ),*/
                  SizedBox(
                    height: 20,
                  ),
                 /* Image.asset(
                    "assets/fingerprint.png",
                    height: 36,
                    width: 36,
                  ),*/
              /*    SizedBox(
                    height: 30,
                  ),
                  GestureDetector(
                    onTap: () {
                      Navigator.pushReplacementNamed(context, "/signup");
                    },
                    child: Text(
                      "Don't have an account?",
                      style: GoogleFonts.roboto(
                          textStyle: TextStyle(
                              color: Colors.white70,
                              fontSize: 13,
                              decoration: TextDecoration.underline,
                              letterSpacing: 0.5)),
                    ),
                  )*/
                ],
              ),
            ),
          ],
        ),
      ),
    ));
  }

  login(email,password) async {
    Map data = {
      'email': email,
      'password': password
    };
    print(data.toString());

    final response = await http
        .post(Uri.parse('https://localhost:3001/auth/login'),
      headers: <String, String>{
        'content-type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': email,
        'passe': password
      }),
    );
    setState(() {
      isLoading=false;
    });
    if (response.statusCode == 200) {
      Map<String,dynamic>resposne=jsonDecode(response.body);
      if(!resposne['error'])
      {
        Map<String,dynamic>user=resposne['data'];
        print(" User name ${user['id']}");
        savePref(1,user['name'],user['email'],user['id']);
        Navigator.pushReplacementNamed(context, "/home");
      }else{
        print(" ${resposne['message']}");
      }
    //  _scaffoldKey.currentState.showSnackBar(SnackBar(content:Text("${resposne['message']}")));

    } else {
    //  _scaffoldKey.currentState.showSnackBar(SnackBar(content:Text("Please try again!")));
    }
  }

  savePref(int value, String name, String email, int id) async {
    SharedPreferences preferences = await SharedPreferences.getInstance();

      preferences.setInt("value", value);
      preferences.setString("name", name);
      preferences.setString("email", email);
      preferences.setString("id", id.toString());
      preferences.commit();

  }
  /*Future<User> fetchUser() async{
    final response = await http
        .post(Uri.parse('https://invoice-challenge-api.herokuapp.com/auth/login'),
    headers: <String, String>{
          'content-type': 'application/json; charset=UTF-8',
    },
      body: jsonEncode(<String, String>{
        'email': email,
        'passe': password
      }),
    );

    if (response.statusCode == 200){
      //if the server did return a 200 ok status, then parse the jason
      //return User.fromJson(jsonDecode(response.body));
      return null;
    }else{
      throw Exception('User not Found');
    }*/
  }



