import { supabaseAdmin } from "@/lib/supabase";

const NewView = () => {
  const setNewView = async () => {
    const { data, error } = await supabaseAdmin
      .from('views')
      .insert({ name: 'Ian Supabase' });

    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  setNewView();
  return <div>NewView</div>;
};

export default NewView;
