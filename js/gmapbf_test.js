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
function ExeAll()
{
	if (gt != null)
	{
		gt.ShowQuestion();
	}
	return;
}

//
function Anser(a_ans_id)
{
	//ShowAnser_and_Reference_(a_ans_id);
	if (gt != null)
	{
		gt.ShowAnser_and_Reference(a_ans_id);
	}
	return;
}

