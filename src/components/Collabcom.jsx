import React from 'react'
import { getSnapshot, loadSnapshot, Tldraw, useEditor } from 'tldraw'
import 'tldraw/tldraw.css'
import supabase from '../utils/supabase'
import { useParams } from 'react-router'
function Collabcom(){
    let {roomId}=useParams();
    function Toolbar(){
        const editor=useEditor();
        async function checkIfKeyIsPresent(){
            try{
                let{data,error}=await supabase.from("whiteboards").select("*").eq("key",roomId);
                 if(data){
                    return data
                 }
                 console.log(error);
                 return
            }catch(err){
                console.log(err);
                
            }
        }
        async function save (){
            
            const snapshot=getSnapshot(editor.store);
            
         
            try{
                const prevData = await checkIfKeyIsPresent()
          if(prevData && prevData.length>0){
            const {data,error}=await supabase
            .from("whiteboards")
            .update({json:JSON.stringify(snapshot)})
            .eq('key',roomId)
            .select();
              console.log(error);
              
          if(data){
              alert("update success")
          }
          return
        }
          
          const {data, error} = await supabase
          .from('whiteboards')
          .insert([
            {key : roomId , json:JSON.stringify(snapshot)},
          ])
          .select()
          if(data){
               alert('content saves');
          }
          else{
            alert(error);
          }
            }catch(err){
                console.log(err)
            }
        }
        return <div style={{pointerEvents:'all'}}>
        <button onClick={save}>Save</button>
        </div>
    };
    async function loadDtata(editor){
        try{
          let{data,error}=await supabase
          .from("whiteboards")
          .select("*")
          .eq("key",roomId);
          console.log(error);
          if(data && data[0]){
            console.log(data);
            
            loadSnapshot(editor.store,JSON.parse(data[0]?.json))
        
        }
        }catch(err){
            console.log(err);
            
        }
        
    }
    return(
        <div style={{ position: 'fixed', inset: 0 }}>
                    <Tldraw components={{
                        SharePanel: ()=><Toolbar/> 
                         }}
                         
                         onMount={(editor) =>{
                            loadDtata(editor)
                         }}
                         />
                </div>
    ) 
}
export default Collabcom