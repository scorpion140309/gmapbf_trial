//
// GMAPBF_TRAINING のインスタンスを生成し、何らかの処理を実行させる。
//

//
var gt = null;
//
function Init()
{
	gt = new GMAPBF_TRAINING();
	gt.ShowQuestion();
	return;
}

//
function GMAPBG_Q(a_go_back)
{
	if (gt != null)
	{
		gt.GoBack(a_go_back);
		gt.ShowQuestion();
	}
	return;
}

//
function GMAPBG_Anser(a_ans_id)
{
	if (gt != null)
	{
		gt.ShowAnser_and_Reference(a_ans_id);
	}
	return;
}

