import 'package:http/http.dart' as http;           

Run / Debug 

Future main()async {
  fetch();
fina json = await fetch();
print( jason['id'])

}
Future<Map> fetch() async {
    var url =  'https://jsonplaceholder.typicode.com/todos/1';
    var response = await http.get(url);
    var json= jsonDecode(response.body);
    return json;
}