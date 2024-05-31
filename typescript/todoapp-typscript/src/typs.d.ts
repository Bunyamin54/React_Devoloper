

interface TodoType {

    todo: string;
    isDone:boolean;
    id: string | number //? iki veri tpinide kabul edecek 
  }

  type AddFn = (text:string) => Promise<void>