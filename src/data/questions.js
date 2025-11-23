export const questions = {
  easy: [
    {
      id: 1,
      type: 'multiple_choice',
      prompt: "Which method is used to print text to the console in Java?",
      choices: [
        "System.print()",
        "System.out.println()",
        "console.log()",
        "print()"
      ],
      answer: "System.out.println()",
      hint: "Use System.out.println() to print text"
    },
    {
      id: 2,
      type: 'multiple_choice',
      prompt: "Which keyword is used to declare an integer variable in Java?",
      choices: [
        "integer",
        "int",
        "var",
        "number"
      ],
      answer: "int",
      hint: "Use the int keyword for integers"
    },
    {
      id: 3,
      type: 'multiple_choice',
      prompt: "What is the correct way to create a String in Java?",
      choices: [
        "String name = 'John';",
        "string name = \"John\";",
        "String name = \"John\";",
        "name = \"John\";"
      ],
      answer: "String name = \"John\";",
      hint: "Use String keyword with double quotes"
    },
    {
      id: 4,
      type: 'multiple_choice',
      prompt: "Which symbol is used for single-line comments in Java?",
      choices: [
        "//",
        "#",
        "/*",
        "<!--"
      ],
      answer: "//",
      hint: "Use two forward slashes for single-line comments"
    },
    {
      id: 5,
      type: 'multiple_choice',
      prompt: "What is the correct syntax for an if statement in Java?",
      choices: [
        "if (x > 5)",
        "if x > 5",
        "if (x > 5) then",
        "if x > 5 then"
      ],
      answer: "if (x > 5)",
      hint: "Use parentheses around the condition"
    },
    {
      id: 6,
      type: 'multiple_choice',
      prompt: "Which loop is best when you know how many times to iterate?",
      choices: [
        "while loop",
        "for loop",
        "do-while loop",
        "foreach loop"
      ],
      answer: "for loop",
      hint: "Use for loop when you know the number of iterations"
    },
    {
      id: 7,
      type: 'multiple_choice',
      prompt: "How do you create an array of 5 integers in Java?",
      choices: [
        "int[] numbers = new int[5];",
        "int numbers = new int[5];",
        "array numbers = new int[5];",
        "int numbers[] = new int[5];"
      ],
      answer: "int[] numbers = new int[5];",
      hint: "Use int[] syntax with new keyword"
    },
    {
      id: 8,
      type: 'multiple_choice',
      prompt: "Which keyword is used to create a method that returns a value?",
      choices: [
        "function",
        "return",
        "method",
        "void"
      ],
      answer: "return",
      hint: "Use return keyword to return a value"
    },
    {
      id: 9,
      type: 'multiple_choice',
      prompt: "What is the main method signature in Java?",
      choices: [
        "public static void main(String[] args)",
        "public void main(String args)",
        "static void main(String[] args)",
        "public main(String[] args)"
      ],
      answer: "public static void main(String[] args)",
      hint: "Main method must be public, static, void, and take String array"
    },
    {
      id: 10,
      type: 'multiple_choice',
      prompt: "Which data type can only be true or false?",
      choices: [
        "String",
        "int",
        "boolean",
        "char"
      ],
      answer: "boolean",
      hint: "Use boolean for true/false values"
    }
  ],
  normal: [
    // Multiple choice questions for Normal difficulty
    {
      id: 11,
      type: 'multiple_choice',
      prompt: "Which collection class should you use when you need to store key-value pairs?",
      choices: [
        "ArrayList",
        "HashMap",
        "LinkedList",
        "HashSet"
      ],
      answer: "HashMap",
      hint: "HashMap stores key-value pairs"
    },
    {
      id: 12,
      type: 'typing',
      prompt: "Complete the switch statement:\nint day = 3;\nswitch (__________) {\n  case 1: System.out.println(\"Monday\"); break;\n  case 2: System.out.println(\"Tuesday\"); break;\n  case 3: System.out.println(\"Wednesday\"); break;\n}",
      answer: "day",
      hint: "Switch on the day variable"
    },
    {
      id: 13,
      type: 'multiple_choice',
      prompt: "What is the correct way to iterate through an array using enhanced for loop?",
      choices: [
        "for (int i = 0; i < array.length; i++)",
        "for (int item : array)",
        "for each (int item in array)",
        "foreach (int item : array)"
      ],
      answer: "for (int item : array)",
      hint: "Use colon syntax for enhanced for loop"
    },
    {
      id: 14,
      type: 'typing',
      prompt: "Use ArrayList:\nimport java.util.ArrayList;\n// Create an ArrayList of Strings\n__________",
      answer: "ArrayList<String> list = new ArrayList<>();",
      hint: "Use ArrayList<String> with diamond operator"
    },
    {
      id: 15,
      type: 'multiple_choice',
      prompt: "Which exception is thrown when you divide by zero?",
      choices: [
        "NullPointerException",
        "ArithmeticException",
        "IndexOutOfBoundsException",
        "IllegalArgumentException"
      ],
      answer: "ArithmeticException",
      hint: "Arithmetic operations can throw this exception"
    },
    {
      id: 16,
      type: 'typing',
      prompt: "Complete the do-while loop:\nint i = 0;\ndo {\n  System.out.println(i);\n  i++;\n} while (__________);",
      answer: "i < 5",
      hint: "Continue while i is less than 5"
    },
    {
      id: 17,
      type: 'multiple_choice',
      prompt: "Which method is used to convert a String to uppercase?",
      choices: [
        "toUpper()",
        "upperCase()",
        "toUpperCase()",
        "upper()"
      ],
      answer: "toUpperCase()",
      hint: "Use toUpperCase() method"
    },
    {
      id: 18,
      type: 'typing',
      prompt: "Use StringBuilder:\n// Create a StringBuilder and append \"Hello\"\n__________",
      answer: "StringBuilder sb = new StringBuilder(); sb.append(\"Hello\");",
      hint: "Create StringBuilder and use append method"
    },
    {
      id: 19,
      type: 'multiple_choice',
      prompt: "What keyword is used to handle exceptions?",
      choices: [
        "catch",
        "handle",
        "try-catch",
        "exception"
      ],
      answer: "catch",
      hint: "Use catch block to handle exceptions"
    },
    {
      id: 20,
      type: 'typing',
      prompt: "Override toString method:\npublic class Person {\n  private String name;\n  public String toString() {\n    __________\n  }\n}",
      answer: "return \"Person: \" + name;",
      hint: "Return a string representation"
    }
  ],
  hard: [
    {
      id: 21,
      prompt: "Use generics:\n// Create a generic method that returns the larger of two values\npublic static <T extends Comparable<T>> T max(T a, T b) {\n  __________\n}",
      answer: "return a.compareTo(b) > 0 ? a : b;",
      hint: "Use compareTo method from Comparable interface"
    },
    {
      id: 22,
      prompt: "Complete the lambda expression:\nList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n// Use lambda to print each number\nnumbers.forEach(__________);",
      answer: "n -> System.out.println(n)",
      hint: "Use lambda syntax with parameter n"
    },
    {
      id: 23,
      prompt: "Use Optional:\nimport java.util.Optional;\n// Create an Optional with a non-null value\n__________",
      answer: "Optional<String> opt = Optional.of(\"Hello\");",
      hint: "Use Optional.of() for non-null values"
    },
    {
      id: 24,
      prompt: "Complete the stream operation:\nList<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\n// Convert to uppercase and collect to list\nList<String> upper = names.stream()\n  __________\n  .collect(Collectors.toList());",
      answer: ".map(String::toUpperCase)",
      hint: "Use map operation with method reference"
    },
    {
      id: 25,
      prompt: "Use synchronized keyword:\n// Make this method thread-safe\npublic __________ void incrementCounter() {\n  counter++;\n}",
      answer: "synchronized",
      hint: "Use synchronized keyword for thread safety"
    },
    {
      id: 26,
      prompt: "Complete the functional interface:\n@FunctionalInterface\ninterface Calculator {\n  int operate(int a, int b);\n}\n// Implement using lambda\nCalculator add = __________;",
      answer: "(a, b) -> a + b",
      hint: "Lambda expression that adds two parameters"
    },
    {
      id: 27,
      prompt: "Use CompletableFuture:\nimport java.util.concurrent.CompletableFuture;\n// Create a CompletableFuture that returns \"Hello\"\n__________",
      answer: "CompletableFuture<String> future = CompletableFuture.completedFuture(\"Hello\");",
      hint: "Use completedFuture static method"
    },
    {
      id: 28,
      prompt: "Complete the method reference:\nList<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\n// Sort using method reference\nnames.sort(__________);",
      answer: "String::compareTo",
      hint: "Use String's compareTo method reference"
    },
    {
      id: 29,
      prompt: "Use reflection:\n// Get the Class object for String class\n__________",
      answer: "Class<?> clazz = String.class;",
      hint: "Use .class syntax"
    },
    {
      id: 30,
      prompt: "Complete the annotation:\n// Create a custom annotation\n@Retention(RetentionPolicy.RUNTIME)\n@interface __________ {\n  String value();\n}",
      answer: "CustomAnnotation",
      hint: "Name your custom annotation"
    }
  ]
}

export function getRandomQuestions(difficulty, count = 10) {
  const pool = questions[difficulty] || questions.easy
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, pool.length))
}