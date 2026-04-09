insert into public.problems (question, answer, category, problem_type, language)
values
(
$q1$다음은 Java언어로 작성된 코드이다. 코드의 실행 결과를 쓰시오. (단, 출력문의 출력 서식을 준수하시오.)

```java
public class Test {
   static int[] arr() {
     int a[] = new int[4];
     int b = a.length;
     for(int i = 0; i < b; i++)
        a[i] = i;
     return a;
   }

   public static void main(String[] args) {
     int a[] = arr();
     for(int i = 0; i < a.length; i++)
        System.out.print(a[i] + " ");
   }
}
```$q1$,
'0 1 2 3',
'출력',
'code',
'Java'
),
(
$q2$다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞은 출력값을 작성하시오.

```java
public class Main {

    public static void main(String[] args) {
        int[] data = {3, 5, 8, 12, 17};
        System.out.println(func(data, 0, data.length - 1));
    }

    static int func(int[] a, int st, int end) {
        if (st >= end) return 0;
        int mid = (st + end) / 2;
        return a[mid] + Math.max(func(a, st, mid), func(a, mid + 1, end));
    }
}
```$q2$,
'20',
'재귀',
'code',
'Java'
),
(
$q3$다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞은 출력값을 작성하시오.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(calc("5"));
    }

    static int calc(int value) {
        if (value <= 1) return value;
        return calc(value - 1) + calc(value - 2);
    }

    static int calc(String str) {
        int value = Integer.valueOf(str);
        if (value <= 1) return value;
        return calc(value - 1) + calc(value - 3);
    }
}
```$q3$,
'4',
'오버로딩',
'code',
'Java'
),
(
$q4$다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞은 출력값을 작성하시오.

```java
public class Main {

    public static void main(String[] args) {
        int a = 5, b = 0;

        try {
            System.out.print(a / b);
        } catch (ArithmeticException e) {
            System.out.print("출력1");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.print("출력2");
        } catch (NumberFormatException e) {
            System.out.print("출력3");
        } catch (Exception e) {
            System.out.print("출력4");
        } finally {
            System.out.print("출력5");
        }
    }
}
```$q4$,
'출력1출력5',
'예외처리',
'code',
'Java'
);
