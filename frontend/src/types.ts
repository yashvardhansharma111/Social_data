export interface WorkflowFormData {  // Renamed from FormData to WorkflowFormData
    inputValue: string;
    inputType: 'text' | 'url' | 'file';
    outputType: 'chat' | 'text' | 'any' | 'debug';
    streaming: boolean;
  }
  
  export interface WorkflowResult {
    message: string;
    output: string;
  }
  
  export interface InputFormProps {
    onSubmit: (formData: WorkflowFormData) => void;  // Updated type reference
  }