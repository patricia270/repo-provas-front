import { useEffect, useState } from 'react';
import Navbar from '../components/Navibar';
import Footer from '../components/Footer';
import { subjects, categories } from '../mock/mockData';
import {
    Form,
    Select,
    PurpleButton,
    DivForm,
} from '../styles/sendSubjectStyle';

function SendTest() {
    const [professors, setProfessors] = useState([]);
    const [semester, setSemester] = useState('');
    const [category, setCategory] = useState('');
    const [subject, setSubject] = useState('');
    const [professor, setProfessor] = useState('');
    const [pdfLink, setPdfLink] = useState('');

    useEffect(() => {
        if (subject) {
            let auxArray = subjects.filter((e) => e.name === subject);
            setProfessors(auxArray[0].professors);
        }
    }, [subject])

    function SendTestInfo(event) {
       event.preventDefault();
       const body = {
        semester,
        category,
        subject,
        professor,
        pdfLink,
       }
        console.log(body)
    }

    

    return (
        <>
            <Navbar />
            <Form onSubmit={SendTestInfo}>
                <DivForm>
                    <input
                        type='text'
                        name='semester'
                        placeholder='Semestre (ex: 2021.2)'
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                    />
                    <Select 
                        name='category' 
                        defaultValue={'DEFAULT'} 
                        value={category} 
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option label='Categoria' disabled></option>
                        { categories.map((category, index) => (
                            <option key={index} value={category.name}>{category.name}</option>
                        ))}
                    </Select>
                    <Select
                        name='subject'
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                    >
                        <option label='Disciplina' disabled></option>
                        { subjects.map((subject, index) => (
                            <option key={index} value={subject.name}>{subject.name}</option>
                        ))}
                    </Select>
                    <Select
                        name='professor'
                        defaultValue={'DEFAULT'}
                        value={professor}
                        onChange={e => setProfessor(e.target.value)}
                    >
                        <option label='Professor(a)' disabled></option>
                        { professors ? professors.map((professor, index) => (
                            <option key={index} value={professor.name}>{professor.name}</option>
                        )): ''}
                    </Select>
                    <input
                        type='text'
                        name='pdfLink'
                        placeholder='Link do pdf'
                        value={pdfLink} onChange={(e) => setPdfLink(e.target.value)}
                    />
                    <PurpleButton type='submit'>
                        Enviar
                    </PurpleButton>
                </DivForm>
            </Form>
            <Footer />
        </>
    );
}

export default SendTest;