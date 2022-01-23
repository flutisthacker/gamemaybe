//Sort

function BubbleSort(num){
var temp;
var size=num.length;
        for (i=0; i < size; i++) {
            for (j = 0; j < size - i - 1; j++) {
                if (num[j] > num[j + 1]) {
                    temp = num[j];
                    num[j] = num[j + 1];
                    num[j + 1] = temp;
                }
            }
        }//end of for loop

        for (i = 0; i < size; i++) {
            console.log(num[i]+"; ");
        }
}

function InsertionSort(num){
        var temp, j;
        var size=num .length
        for (var i = 1; i < size; i++) {
        temp = num[i];
        j = i - 1;
        try {
            while ((temp < num[j]) && (j >= 0)) {
                num[j + 1] = num[j];
                j = j - 1;
            }
        } catch (ArrayIndexOutOfBoundsException ) {
           // System.out.println("Caught" + e.getMessage());
        }
        num[j + 1] = temp;
    }//end of for loop
    for (i = 0; i < size; i++) {
        console.log(num[i]+"; ");
    }
}


var low;
var high;
function quick(num, l, h) {
    low = l;
    high = h;
    let key = num[(low + high) / 2];

    do {
        while (key > num[low]) {
            low++;
        }
        while (key < num[high]) {
            high--;
        }
        if (low <= high) {
            let temp = num[low];
            num[low++] = num[high];
            num[high--] = temp;
        }
    } while (low <= high);
    if (l < high) {
        quick(num, l, high);
    }
    if (low < h) {
        quick(num, low, h);
    }
}

function QuickSort(num){
    var size;
    size = num.length();

    quick(num, 0, size - 1);

    console.log("Sorted Element are::");
    for (var i = 0; i < size; i++) {
        console.log(num[i] + "; ");
    }
}
QuickSort([2,4,15,6,3,7])
InsertionSort([2,4,15,6,3,7])
BubbleSort([2,4,15,6,3,7])