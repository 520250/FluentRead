package translation

import "github.com/hwfy/translate"

// BingTrans 必应翻译，发生错误返回空字符串
func BingTrans(origin string) string {
	return translate.ToSimplifiedByBing(origin)
}
