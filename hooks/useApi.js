export function useApi(){

    async function listAll(){
        try{
            const response = await fetch('<http:/192.168.1.64:8000/api/pontos>');
            const json = await response.json();
            return json;
        } catch(error) {
            console.error(error);
        }
    }

    return {listAll};
}