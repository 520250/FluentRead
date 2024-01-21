package translation

import (
	"fmt"
	"testing"

	gt "github.com/bas24/googletranslatefree"
)

func TestGoogleTrans(t *testing.T) {
	text := "Hello, World!"
	for i := 0; i < 10; i++ {
		result, _ := gt.Translate(text, "auto", "zh")
		fmt.Println(result)
	}
}
