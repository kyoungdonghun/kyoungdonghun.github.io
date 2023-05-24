var store = [{
        "title": "BLOG 카테고리 테스트 ",
        "excerpt":"자바 카테고리 테스트 입니다. 카테고리는 자바, 테그는 “처음”, “테스트” 입니다.   ","categories": ["BLOG"],
        "tags": ["처음","테스트"],
        "url": "/blog/BLOG001/",
        "teaser": null
      },{
        "title": "JAVA 카테고리 테스트",
        "excerpt":"자바 카테고리 테스트 입니다. 카테고리는 자바, 테그는 “처음”, “테스트” 입니다.   ","categories": ["JAVA"],
        "tags": ["처음","테스트"],
        "url": "/java/JAVA001/",
        "teaser": null
      },{
        "title": "JAVA, 배열을 이용한 정수 출력 그리고 print,printf,println",
        "excerpt":"public class basic021 { public static void main(String []args) { int[]grade = {90,80,89}; int tot = grade[0]+grade[1]+grade[2]; int average = tot/3; 정수 연산은 정수 System.out.printf(\"국어 %d점, 영어 %d점, 수학 %d점 =&gt; \\t\", 개행문자(=줄바꿈문자=\\n) 포함안됨. 괄호안 내용을 단순히 출력. printf : C에서의 printf와 동일. %d, %s 등을 쓰기위해 사용. 개행문자 포함X...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA002/",
        "teaser": null
      },{
        "title": "JAVA, String문자열의 .length() 그리고 .indexOf()",
        "excerpt":"public class basic023 { public static void main(String []args) { char a = '이'; String letter = \"동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세\"; int letterNumber=letter.length(); int loc=letter.indexOf(a); .indexOf( “찾을 특정 문자” , “시작할 위치” ) 이런식으로 사용해 주면된다. “시작할 위치” 같은경우는 생략이 가능하며 생략할 경우 0번째 즉...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA003/",
        "teaser": null
      },{
        "title": "JAVA, Final을 이용한 상수 선언.",
        "excerpt":"상수란 변하지 않고, 항상 일정한 값을 갖는 수. public class basic026 { public static void main(String []args) { final int PHYSICAL = 23; 내가 임의로 선언한 상수. System.out.println(PHYSICAL); int index = PHYSICAL; 상수값을 변수에 대입 double vals = 2 * Math.PI/index; System.out.println(vals + \"라디안\"); Math.PI는 math클래스에 public static final double...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA004/",
        "teaser": null
      },{
        "title": "JAVA, 관련있는 상수들의 집합, 열거형 Enum",
        "excerpt":"class, interface와 동급의 형식. 사실상 class지만 얘 만의 문법을 위해 enum이라고 구분짓는다. 특징은 연관된 값을 정리, 값들이 변경되지않도록 보장, 내부에 생성자, 필드, 메소드를 가질수있어서 확장성까지 보유. public enum FRUIT { APPLE,BANANA,MANGO } public class basic031 { public static void main(String []args) { FRUIT pear = FRUIT.APPLE; FRUIT pear2 = FRUIT.MANGO;...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA005/",
        "teaser": null
      },{
        "title": "JAVA, 참조변수 이용해보기.",
        "excerpt":"public class basic033 { \tpublic static void main(String []args) { \t\tdouble latitude1 = 37.52; \t\tdouble longtitude1=127.00; \t\tdouble latitude2=35.13; \t\tdouble lontitude2=129.04;\t      위도, 경도 객체    \t\tGeo geo1 = new Geo(); \t\tgeo1.latitude=latitude1; \t\tgeo1.longtitude=longtitude1; \t\tSystem.out.println(geo1.latitude+\"\\t\"+geo1.longtitude); \t\t \t\tGeo geo2 = new Geo(); \t\tgeo2.latitude=latitude2; \t\tgeo2.longtitude=lontitude2; \t\t \t\tGeo geo =geo1; \t\tSystem.out.println(geo.latitude+\"\\t\"+geo.longtitude);\t\t\t \t} }   //결과   37.52\t127.0 37.52\t127.0  ","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA006/",
        "teaser": null
      },{
        "title": "JAVA, 삼항연산자.",
        "excerpt":"public class basic035 { \tpublic static void main(String []args) { \t\tint temp=9; \t\ttemp =(temp%2==1)?temp*3+1 : temp/2;       삼항연산자, 간단하게, “if(a){ d=b} else{d=c}”는 “D=A?b:c”와 같다.    \t\tSystem.out.printf(\"계산후 = %d\\n\", temp); \t} }   //결과   계산후 = 28  ","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA007/",
        "teaser": null
      },{
        "title": "JAVA, switch와 case이용해보기..",
        "excerpt":"public class basic036 { public static String textInfor(int index, double value) { String result = \"\"; switch(index) { case 23 : result = \"신체지수\"; break; } return result + (value*100); } public static void main(String []args) { int index=23; double value=0.86; String st=textInfor(index, value); case에서 분기한 결과 문자열에 각 지수값을...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA008/",
        "teaser": null
      },{
        "title": "JAVA, switch와 case, Enum을 이용한 상수들로 신체지수 구하기.",
        "excerpt":"public enum PEI { PHYSICAL(23),EMOTIONAL(28),INTELLECTUAL(33); private final int peiValue; PEI(int pie){ this.peiValue=pie; } public int getPei() { return peiValue; } } public class basic038 { public static String textInfor(PEI index, double value) { String result = \"\"; switch(index) { case PHYSICAL : result = \"신체지수\"; break; case EMOTIONAL : result...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA009/",
        "teaser": null
      },{
        "title": "JAVA, for를 이용하여 화씨,섭씨 구하기.",
        "excerpt":"public class basic041 { public static void main(String []args) { for(int i = 0; i&lt;101; i++) { double fahrenheit = 9.0/5*i+32; 화씨 구하는 공식 System.out.printf(\"섭씨 %d 도 = 화씨 %.2f도\\n\", i, fahrenheit); } } } //결과 섭씨 0 도 = 화씨 32.00도 섭씨 1 도 = 화씨 33.80도 섭씨 2...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA010/",
        "teaser": null
      },{
        "title": "JAVA, while,if,else를 이용하여 1이 될때까지 나누기.",
        "excerpt":"public class basic043 { public static void showOddnEvenw(int n) { int temp = n; while(temp != 1) { 1이 될때 까지 실행 if (temp %2 == 1) { 나머지가1일때. temp=temp*3+1; 3을 곱하고 1을 더한다. } else { temp/=2; temp = temp/2 } System.out.println(\"[\"+temp+\"]\"); } System.out.println(\"\\n--------------\"); } public static void main(String...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA011/",
        "teaser": null
      },{
        "title": "JAVA, do,while,if,else를 이용하여 1까지 나누기.",
        "excerpt":"public static void showOddnEvenw(int n) { int temp=n; do { while문 하지만 한번은 무조건 실행되는, if(temp%2 == 1) { temp = temp*3+1; } else { temp /=2; } System.out.println(temp); } while(temp != 1); 1이 될때까지. System.out.println(\"aa\"); } public static void main(String []args) { showOddnEvenw(10); } } //결과 5 16 8...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA012/",
        "teaser": null
      },{
        "title": "JAVA, 자바 클래스 Math.random 사용해서 난수 만들어보기.",
        "excerpt":"public class basic046 { public static void main(String[]args) { int range = 10; int start =1; int a=0, b=0, c=0; while(true) { a=(int)(range*Math.random()+start); Math.random() * 최댓값 -&gt; 최대값 설정하기. b=(int)(range*Math.random()+start); 최소값도 추가하려면, ( Math.random() * ( 최대값 - 최소값 ) ) + 최소값 -&gt; 최소값 설정하기. c=(int)(range*Math.random()+start); 0 ~ 1...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA013/",
        "teaser": null
      },{
        "title": "JAVA, 각 자리의 숫자 합하기.",
        "excerpt":"public class basic048 { \tpublic static int sumEach(int n) { \t\tint tot =0; \t\twhile(n!=0) { \t\t\ttot += n%10;\t      3-&gt;2-&gt;1    \t\t\tn/=10;       n = n/10    \t\t} \t\treturn tot;\t \t} \tpublic static void main(String[]args) { \t\tint number =1234567; \t\tint value = sumEach(number); \t\tSystem.out.printf(\"%d에대한각자리의 숫자합 :%d\",number,value); \t} }   //결과   1234567에대한각자리의 숫자합 :28  ","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA014/",
        "teaser": null
      },{
        "title": "JAVA, 소수 구하기.",
        "excerpt":"public class basic049 { public static boolean isPrime(int n) { boolean isS= true; for(int i=2; i&lt;=(int)Math.sqrt(n);i++) { if(n%i==0) { isS=false; break; } } return isS; } &gt; public static void main(String []args) { int number =1234567; boolean ifPrime = isPrime(number); if(ifPrime) { System.out.printf(\"%는 1과 자신으로만 나눠떨어지는 소수다.\",number); } else {...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA015/",
        "teaser": null
      },{
        "title": "JAVA, shift를 이용하여 10진수 2진수로 변환하기.",
        "excerpt":"public class basic050 { public static String shifts(int a) { String s=\"\"; for(int i=0; i&lt;=31; i++) { int b = a%2; s = (b&gt;=0)?b+s : (-b)+s; a&gt;&gt;=1; } return s; } &gt; public static void main(String []args) { int intNums1 = 123; int intNums2 = -123; System.out.printf(\"%d : %s %n\",...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA016/",
        "teaser": null
      },{
        "title": "JAVA, 배열을 이용하여 정수 출력해보기.",
        "excerpt":"public class basic054 { public static void main(String[]args) { int[]mm= {1,6,22,23,33} ; for(int m : mm) { 배열이나 리스트를 index로 지정하지 않아도 되므로 출력할때 매우 편하다. (출력위주로 할떄 사용) System.out.printf(m+\"\\t\"); :(in) 뒤에는 배열이나 리스트가 오고, 앞에는 타입이 온다. } System.out.println(); } } //결과 1 6 22 23 33 for(int i...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA017/",
        "teaser": null
      },{
        "title": "JAVA, 배열, foreach 이용하여 정수 출력해보기.",
        "excerpt":"public class basic055 { \tpublic static void print(int ...mm) { \t\tfor(int m : mm) { \t\t\tSystem.out.printf(m+\"\\t\"); \t\t} \t\tSystem.out.println(); \t} \tpublic static void main(String[]args) { \t\tint[]mm= {1,6,16,22,23,33}; \t\tprint(mm); \t\tint a=1, b=6, c=16; \t\tprint(a); \t\tprint(a,b); \t\tprint(a,b,c); \t} }   //결과   1\t6\t16\t22\t23\t33\t 1\t 1\t6\t 1\t6\t16\t  ","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA018/",
        "teaser": null
      },{
        "title": "JAVA, 자바의 util, ArrayList를 사용하여 배열 출력하기.",
        "excerpt":"import java.util.ArrayList; public class basic056 { public static void main(String[]args) { List&lt;Integer&gt;ilist=new ArrayList&lt;&gt;(); for (int i = 1; i &lt;=10; i++) { ilist.add(i); } for(int i=0; i&lt;ilist.size(); i++) { int m = ilist.get(i); System.out.printf(\"%d\\t\", m); } System.out.println(); } } //결과 1 2 3 4 5 6 7 8 9 10...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA019/",
        "teaser": null
      },{
        "title": "JAVA,  자바의 유틸, forEach 사용하여 배열 출력하기.",
        "excerpt":"import java.util.Arrays; import java.util.List; import java.util.function.Consumer; public class basic057 { public static void main(String[]args) { List&lt;Integer&gt;mmlists=Arrays.asList(1,6,16,22,23,33); 인덱스 없이 순서대로 수를 가져온다음 -&gt;{}람다형식을 이용해서 그 수를 처리한다. mmlists.forEach( 순서대로 수를 가져와 출력할려면 forEach(m -&gt;{m출력})형식을 이용한다. m -&gt; {System.out.printf(m+\"\\t\");} ); System.out.println(); Consumer&lt;Integer&gt;consume = (Integer m) -&gt;{System.out.printf(m+\"\\t\");}; mmlists.forEach(consume); } } //결과 1 6...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA020/",
        "teaser": null
      },{
        "title": "JAVA,  홀수의 제곱값을 배열로 출력하기.",
        "excerpt":"public class basic058 { public static void main(String[]args) { List&lt;Integer&gt;ilist = new ArrayList&lt;&gt;(); 정수를 List에 저장한다. 를 이용하여 정수로 한정. List에 저장할 수가 int타입이므로 랩퍼클래스 integer를 이용하여 List로 선언하고 생성. int s=0; for(int i =1;i&lt;=10;i++) { 1~10 사이의 정수를 list에 저장. ilist.add(i); } for (int m:ilist) { 저장된 것을 가져와서...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA021/",
        "teaser": null
      },{
        "title": "JAVA, 람다를 이용하여 1~100 사이의 숫자들의 조건 합 구하기.",
        "excerpt":"import java.util.ArrayList; import java.util.List; import java.util.function.BinaryOperator; List에 저장된 데이터중 조건에 맞는것을찾을때 filter를 사용한다.(filter조건을 맞는 수를 골라낸다. 합을 구할때는 reduce 를 사용하여 간편하게 연산한다. 리스트에 저장된 수 중에서 홀수를 찾을려면 list.stream().filter(i-&gt;i%2==1)를 사용하고, filter를 사용하여 찾은 수의 합을 reduce(초기값, Integer:sum)로 산출한다. public class basic059 { public static void main(String[]args) { List&lt;Integer&gt;ilist =...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA022/",
        "teaser": null
      },{
        "title": "JAVA, stream기능을 이용하여 조건이 있는 수의 합 구하기.",
        "excerpt":"import java.util.ArrayList; import java.util.List; import java.util.stream.Collectors; public class basic060 { public static void main(String []args) { List&lt;Integer&gt;ilist = new ArrayList&lt;&gt;(); int s = 0; for(int i = 1; i&lt;= 10; i++) { ilist.add(i); } ilist=ilist.stream() .filter(i -&gt; i%2 ==1) 홀수를 찾아라. .map(i-&gt;i*i) 그 수를 제곱하라 .collect(Collectors.toList()); 그수를 리스트에 넣어라(filter(수-&gt;홀수).map(수-&gt;수*수).cillect()) ilist.forEach(i-&gt;{System.out.printf(i+\"\\t\");});...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA023/",
        "teaser": null
      },{
        "title": "JAVA, string과 char를 이용하여 10진수를 2진수로 변환하기",
        "excerpt":"public class basic061 { public static final int BITMASK = 1; public String makeBit(int value) { 문자열.charAt(index)는 index 위치의 문자(char)를 반환한다. 문자열.length()는 뭄자열의 길이(문자갯수)를 반환한다. new String(char[])은 문자열로 변환한다. 문자열.toCharAttay()는 문자열내부에 저장된 문자들을 char[]로 반환한다. char배열을 String 으로 만들기위해 char[]val=new char[32]; in타입이 32비트이므로 32짜리 배열준비. for(int i=31; i&gt;=0;i--) { 첫번째로...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA024/",
        "teaser": null
      },{
        "title": "JAVA, 정수를 입력받을 때 발생할 수 있는 예외 처리하기.",
        "excerpt":"public class basic062 { 문자열을 기본 타입으로 변환할 때는 랩퍼(Wrapper)클래스를 이용한다. “34”와 같은 정수형 문자열을 정수로 변환하려면 Integer.parseInt()를, “34.5”와 같은 실수형 문자열을 실수로 변환하려면 Double.parseDouble()을 사용한다. public static void main(String []args) { String sNum=\"123\"; String nNum=\"h\"; try { int a = Integer.parseInt(sNum); 정수타입 문자열을 정수로 변활할떄 사용한다 System.out.println(a); } catch(NumberFormatException...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA025/",
        "teaser": null
      },{
        "title": "JAVA, 정수를 입력받을 때 발생할 수 있는 예외 처리하기.",
        "excerpt":"public class basic063 { public static void main(String[]args) { try { int x = 5; int y = 20/(5-x); 예외 준비 System.out.println(y); } catch (ArithmeticException e) { System.out.println(\"==&gt; 0으로 나눴나 확인.\"); } finally { finally는 정상, 예외 상관없이 실행되는 블록. System.out.println(\"확인해봅시다..\"); } } } //결과 ==&gt; 0으로 나눴나 확인. 확인해봅시다.....","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA026/",
        "teaser": null
      },{
        "title": "JAVA, object 이해하고 사용하기.",
        "excerpt":"public class basic064 { public static void main(String[]args) { Object obj1=new Object(); Object클래스에 대한 객체를 생성한다. Object에 객체가 생성되면 JVM이 구별하는 해시코드와 사용자가 구별할 수 있는 레퍼런스도 준비됨. Object obj2=new Object(); Object클래스가 스태틱 영역에 올라가고 객체는 힙영역에 생성되며 레퍼런스는 스택영역에 있게된다. System.out.println(obj1.hashCode()); native 10진수 //JVM이 구별할려는 객체의 해시코드를 리턴한다. System.out.println(Integer.toHexString(obj1.hashCode()));...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA027/",
        "teaser": null
      },{
        "title": "JAVA, Class를 이용하여 메서드와 생성자 살펴보기.",
        "excerpt":"import java.lang.reflect.Constructor; import java.lang.reflect.Method; public class basic065 {public static void main(String[]args) { Object obj1 = new Object(); Class classes = obj1.getClass(); class 를 반환한다. class는 해당 클래스의 선언된 메서드와 생성자들을 반환하는 메서드를 제공한다.클래스에 대한 모든 정보는 java.lang.class를 이용한다. System.out.println(classes.getName()); 클래스 이름을 리턴한다. System.out.println(\"------constructor\"); Constructor []constructor = classes.getDeclaredConstructors(); 선언한 생성자를 제공....","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA028/",
        "teaser": null
      },{
        "title": "JAVA, String(문자열)을 이용해 도시 이름 비교하기.",
        "excerpt":"public class basic066 { 원래 new키워드로 생성한 객체의 stack의 레퍼런스는 같을 수 없다. 또한 heap의 해시코드도 같을수 없다. 그러나 String은 Heap의 풀(Pool)을 사용하므로 같은 문자열에 대하여 new로 생성한 문자열의 Stack레퍼런스는 다르지만 Heap의 해시코드는 동일하다. 같은 문자열에 대하여 new로 생성하지않은 문자열은 Stack의 레퍼런스와 Heap의 래시코드가 동일하다. String의생성방법에 따라 Stack의 레퍼런스는 다를...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA029/",
        "teaser": null
      },{
        "title": "JAVA, String(문자열)가공하기.",
        "excerpt":"public static void main(String []args) { String text=\"Hello Java4 Android\"; String com=\"HEllo java4 Android\"; //String은 문자열 가공을 위한 메서드를 많이 제공한다. System.out.println(text.charAt(2)); 자바에서 인덱스(위치)는 0부터 시작한다. ‘H’,’e’ … Hello에서 l는 2번쨰 인덱스이다. System.out.println(text.concat(\"s\")); concat()은 +와 같다. 문자열 s를 오른쪽에 붙인다. System.out.println(text.contains(\"And\")); And 문자열을 포함하고있는지 판단한다.true System.out.println(text.equals(com)); text와 com이 같은지 확인한다....","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA030/",
        "teaser": null
      },{
        "title": "JAVA, 리플렉션(Reflection)을 이용하여 클래스 정보 출력하기",
        "excerpt":"import java.lang.reflect.Constructor; import java.lang.reflect.Method; reflect을 이용하면 클래스에 대한 생성자와 메서드 등에 대한 정보를 얻을 수 있다. 생성자는 new예약어로 객체를 생성할 떄 한 번 호출되는 초기화용 메서드다. 생성자는 public이나 String(char[])처럼 “제한자 클래스이름 (인자)”의 형태로사용됨. 메서드는 public int charAt(index)처럼 “제한자 리턴타입 메서드이름(인자)”의 형태를 취한다. “제한자(modifier)는 int타입이므로 문자열로 변환해야 보기에 편리하다. 예를 들어...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA031/",
        "teaser": null
      },{
        "title": "JAVA, String Buffer로 문자열 수정, 변경, 추가하기.",
        "excerpt":"public class basic069 { public static void main(String[] args) { StringBuffer 생성 문자열을 저장 또는 처리하는 String은 참조 타입이지만 성격을 변경해서(오버라이딩)기본타입과 동일한 CBV(값 복사)를 한다. 문자열을 연산한 후 대입연산자로 저장해야 변경한다. 바꾼 문자열을 다시 대입하지않으면 원래문자열이 되는 특징이 이뮤터블이다. 내용이 변경되면 새로운 주소를 갖는다. StringBuffer는 저장하는 내영이 변경이 되어도 처음...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA032/",
        "teaser": null
      },{
        "title": "JAVA, StringBuilder로 문자열 수정, 변경, 추가하기.",
        "excerpt":"public class basic070 { public static void main(String[]args) { StringBuilder sbu = new StringBuilder(); sbu.append(\"가나\") .append(\"다라\") .append(\"마바\"); System.out.println(sbu); System.out.println(\"------\"); sbu.replace(1, 2, \"붥\"); System.out.println(sbu); System.out.println(\"------\"); sbu.reverse(); System.out.println(sbu); System.out.println(\"------\"); sbu.deleteCharAt(2); System.out.println(sbu); System.out.println(\"------\"); sbu.delete(0, 1); System.out.println(sbu); System.out.println(\"------\"); String ss = sbu.substring(0); System.out.println(ss); System.out.println(sbu); System.out.println(\"------\"); String st = sbu.substring(1); System.out.println(st); System.out.println(sbu); System.out.println(\"------\"); } }...","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA033/",
        "teaser": null
      },{
        "title": "JAVA, System으로 연산 소요 시간 구하기.",
        "excerpt":"import java.util.Date; import java.util.Enumeration; import java.util.Properties; public class basic071 { public static void main(String[]args) { long ltime = System.currentTimeMillis(); 1970.1.1년 부터 지금까지 걸린 시간을 밀리세컨드 단위로 변환한다. A라고 가정. System.out.println(ltime); for(int i=0;i&lt;100000;i++) { System.out.print(\"\"); } long ltime2=System.currentTimeMillis(); 100000번의 연산이 끝난 시점의 1970.1.1년 부터 지금까지 걸린 시간을 밀리세컨드 단위로 변환한다.B라고 가정....","categories": ["JAVA"],
        "tags": ["JAVA","Pratice"],
        "url": "/java/JAVA034/",
        "teaser": null
      }]
