let arr = [];
let conditionVars = [];
let pageNo = [];

function buildConditionString(cond) {
    var condArr = [];
		if(cond === undefined){
			
			return false;
		}
	
    cond.forEach(function(e) {
			let visibleIf = '{' + e.elementName + '}' + ' = ' + '"' + e.value + '"';
			if(e.type === 'checkbox') {
				visibleIf = '{' + e.elementName + '}' + ' contains ' + '"' + e.value + '"';
			} 
        
        condArr.push(visibleIf);
    })
		
    var condition = condArr.join(" or ");
    return condition;

}

function return_tasks(task,  name,  i , j){
	let elementName = name + i + '_' + j;
	let elementTitle = task.description;
	let elementType = '';
	let element = {
			type: elementType,
			name: elementName
	}

	if (task.type === 'picklist' || task.type === 'checklist') {

			if (task.type === 'picklist') {
					elementType = 'radiogroup';
			}
			if (task.type === 'checklist') {
					elementType = 'checkbox';
			}

			let elementChoices = [];
			task.values.forEach(function(val) {
					elementChoices.push(val.name);
					if (val.setVarTrue) {
							var condition = {
									elementName: elementName,
									value: val.name,
									type: elementType
							};
							if (conditionVars[val.setVarTrue]) {
									conditionVars[val.setVarTrue].push(condition);
							} else {
									conditionVars[val.setVarTrue] = [];
									conditionVars[val.setVarTrue].push(condition);
							}
					}
			})
			
			let basic = {
					type: elementType,
					name: elementName,
					title: elementTitle,
					choices: elementChoices
			}
			
			if(task.tasks) {
				let ext = 'Yes';
				if(elementChoices.includes('Other')){ 
					ext = 'Other';
				}
					
					
				let elems = [basic];
				
				task.tasks.forEach(function(e , i){
					
					let elem = return_tasks(e,  elementName + '_',  i , j);
					elems.push( elem );
					elem.visibleIf = '{' + elementName + '}' + ' = ' + '"'+ext+'"';
				})
				
				element = {
					type: 'panel',
					name: elementName + '_panel',
					elements: elems,
				}
			} 
		else {
				element = basic;
		}
			

	} else if (task.type === 'info' || task.type === 'ftstimeperiods') {
			
			let elems = [];
			let nTask = [];
			if(task.tasksPerPeriod){
				nTask = task.tasksPerPeriod;
			} else if(task.tasks){
				nTask = task.tasks;
			}
			if(nTask !== undefined){
				nTask.forEach(function(e, i ){
					let elem = return_tasks(e,  elementName + '_',  i , j);
					elems.push( elem );
				})
			}
			
			element = {
					type: 'panel',
					name: elementName,
					title: elementTitle,
					elements: elems
			}
			
	} else if (task.type === 'date' || task.type === 'dateish') {

			element = {
					type: 'text',
					name: elementName,
					title: elementTitle,
					inputType: 'date'

			}
			

	} else if (task.type === 'integer') {
			element = {
					type: 'text',
					name: elementName,
					title: elementTitle,
					inputType: 'number'
			}

	} else if (task.type === 'review') {
			element = {
					type: 'rating',
					name: elementName,
					title: elementTitle
			}
	} else if (task.type === 'photo') {
			element = {
					type: 'file',
					name: elementName,
					maxSize: 0
			}
	} else if (task.type === 'signature') {
			element = {
					"type": "signaturepad",
					"name": elementName,
					"title": elementTitle
			}
	}  else if(task.type === 'textarea')	{
			element = {
					 	type: "comment",
					 	"name": elementName,
						"title": elementTitle,
					 	placeHolder: elementTitle
				}
			
	} else {
		element = {
					 type: "html",
					 "name": elementName,
					 html: elementTitle
				}
	}
	if(task.ifVarTrue){
		
		element.visibleIf = buildConditionString(conditionVars[task.ifVarTrue]);
		
	}
	
	if(!arr.includes(element.type)){
		arr.push(element.type);
	}
	
	return element;
}

function process(data) {
    let survey = {
        pages: []
    };
    
    data.tasks.forEach(function(e, i) {
			
        let pageName = 'page' + i;
        let title = e.description;
        let page = {
            name: pageName,
            title: title,
            elements: []
        }
				
				pageNo[i] = pageName;
				
        if (e.ifVarTrue) {
					
          page.visibleIf = buildConditionString(conditionVars[e.ifVarTrue]);
					
        }
			
        if (e.tasks) {
					
            e.tasks.forEach(function(task, j) {
                let element = return_tasks(task,  'element_' , i , j);
							
                page.elements.push(element);

            })

        } else {

        }

        survey.pages.push(page);

    })
		
    return survey;

}

export default process;