import 'package:flutterCrudUser/models/user.dart';
import 'package:flutterCrudUser/provider/users.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class UserForm extends StatefulWidget {
  @override
  _UserFormState createState() => _UserFormState();
}

class _UserFormState extends State<UserForm> {
  final _form = GlobalKey<FormState>();

  final Map<String, String> _formData = {};

  void _loadFormData(User user) {
    if (user != null) {
      _formData['id'] = user.id;
      _formData['name'] = user.name;
      _formData['email'] = user.email;
      _formData['address']= user.address;
    }
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    final User user = ModalRoute.of(context).settings.arguments;
    _loadFormData(user);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Enter invoice and user data '),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.save),
            onPressed: () {
              final isValid = _form.currentState.validate();

              if (isValid) {
                _form.currentState.save();
                Provider.of<Users>(context, listen: false).put(
                  User(
                    id: _formData['id'],
                    name: _formData['name'],
                    email: _formData['email'],
                    address: _formData['address'],
                  ),
                );
                Navigator.of(context).pop();
              }
            },
          ),
        ],
      ),
      body: Padding(
        padding: EdgeInsets.all(20),
        child: Form(
          key: _form,
          child: Column(
            children: <Widget>[
              TextFormField(
                initialValue: _formData['name'],
                decoration: InputDecoration(labelText: 'Nome'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Nome inválido';
                  }
                  if (value.trim().length <= 3) {
                    return 'Nome muito pequeno. No mínimo 3 letras.';
                  }
                  return null;
                },
                onSaved: (value) => _formData['name'] = value,
              ),
              TextFormField(
                initialValue: _formData['email'],
                decoration: InputDecoration(labelText: 'E-mail'),
                onSaved: (value) => _formData['email'] = value,
              ),
            TextFormField(
              initialValue:_formData['address'],
              decoration: InputDecoration(labelText:'address'),
              onSaved: (value) => _formData['address'] = value,
              ),
          TextFormField(
            initialValue:_formData['Product'],
            decoration: InputDecoration(labelText:'Product'),
            onSaved: (value) => _formData['Product'] = value,
          ),
          TextFormField(
          initialValue:_formData['Quantity'],
          decoration: InputDecoration(labelText:'Quantity'),
          onSaved: (value) => _formData['Quantity'] = value,
          ),
          TextFormField(
          initialValue:_formData['Price'],
          decoration: InputDecoration(labelText:'Price'),
          onSaved: (value) => _formData['Price'] = value,
          ),
          TextFormField(
            initialValue:_formData['Tax'],
            decoration: InputDecoration(labelText:'Tax'),
            onSaved: (value) => _formData['Tax'] = value,
          ),
          TextFormField(
            initialValue:_formData['Total'],
            decoration: InputDecoration(labelText:'Total'),
            onSaved: (value) => _formData['Total'] = value,
          )
            ],
          ),
        ),
      ),
    );
  }
}
