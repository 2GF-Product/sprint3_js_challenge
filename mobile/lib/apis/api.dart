//const String ROOT="http://tutionteacher.rrtutors.com";
//const String REGISTRATION="$ROOT/api/registration.php";
//const String LOGIN="$ROOT/api/login.php";
import 'package:http/http.dart' as http;

Future<http.Response> fetchAlbum() {
  return http.get(Uri.parse('https://jsonplaceholder.typicode.com/albums/1'));
}
