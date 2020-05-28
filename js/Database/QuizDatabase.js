//
class QuizDatabase
{
    // 問題、選択肢、解説
    constructor(a_question, a_ans_0, a_ans_1, a_ans_2, a_ans_3, a_reference)
    {
        this.question_ = a_question;
        // 四択パターン
        this.ary_anser_pattern_ = new Array(a_ans_0, a_ans_1, a_ans_2, a_ans_3);

        // 出題数(問題のストック数ではない)
        this.reference_ = a_reference;

        //
        this.rand_ = 0;
    }
    //
    SetRand(a_rand)
    {
        //
        this.rand_ = a_rand;
        return;
    }
    //
    GetQuestion()
    {
        return this.question_;
    }
    //
    GetAnsPattern()
    {
        return this.ary_anser_pattern_;
    }
    //
    GetReference()
    {
        return this.reference_;
    }
}
