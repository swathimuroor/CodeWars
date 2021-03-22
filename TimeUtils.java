//Given time in seconds, return formatted string, as shown in following example:
// Example:
// Input: 90061 sec
// Output: 1 1 1 1
// e.g
// 90061 sec: 1 1 1 1 (1 day, 1 hour, 1 min and 1 seconds)
// 93784 sec: 1 2 3 4 (1 day, 2 hours, 3 mins, 4 seconds)

class TimeUtils {
  public static String convertTime(int timeDiff) {
    int p1 = timeDiff % 60;
    int p2 = timeDiff / 60;
    int p3 = p2 % 60;
        p2 = p2 / 60;
    int p4 = p2 /24;
        p2= p2 % 24;
    
    return p4+" "+p2+" "+p3+" "+p1;
  } 
}

// unit testing
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class TimeUtilsTest {
    @Test
    public void shouldConvertCorrectly() throws Exception {
        assertEquals("1 1 1 1", TimeUtils.convertTime(90061));
        assertEquals("-1 -1 -1 -1", TimeUtils.convertTime(-90061));
    }
}

//other solutions
class TimeUtils {
  public static String convertTime(int timeDiff) {
    String format =  "%s %s %s %s";
        return String.format(format, timeDiff / 86400, timeDiff % 86400 / 3600, timeDiff % 3600 / 60, timeDiff % 60);
  } 
}