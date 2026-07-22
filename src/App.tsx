import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ============ ÍCONES ============
const IconBuilding = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
  </svg>
);

const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconSend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
  </svg>
);

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);

const IconLogOut = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
  </svg>
);

const IconAlert = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>
  </svg>
);

const IconFilter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const IconKey = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>
  </svg>
);

const IconTrash = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
  </svg>
);

const IconPower = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" x2="12" y1="2" y2="12"/>
  </svg>
);

// ============ LOGO AMR ============
const IconLogoAMR = ({ size = 'normal' }: { size?: 'normal' | 'small' }) => {
  const isSmall = size === 'small';
  return (
    <div className="flex items-center gap-3">
      <div 
        className={`font-bold text-white tracking-tighter ${isSmall ? 'text-3xl' : 'text-6xl'}`}
        style={{ fontFamily: 'Georgia, serif' }}
      >
        AMR
      </div>
      <div 
        className={`rounded-full ${isSmall ? 'w-0.5 h-10' : 'w-1 h-16'}`}
        style={{ 
          background: 'linear-gradient(180deg, #E7BE92 0%, #633627 100%)' 
        }}
      />
      <div className="text-left">
        <div 
          className={`font-bold text-white leading-tight ${isSmall ? 'text-sm' : 'text-xl'}`}
          style={{ fontFamily: 'Georgia, serif' }}
        >
          ABEGG,<br/>MACORIM<br/>& ROTTA
        </div>
        <div className={`text-gray-300 tracking-widest ${isSmall ? 'text-[10px]' : 'text-xs'} mt-1`}>
          ADVOGADOS ASSOCIADOS
        </div>
      </div>
    </div>
  );
};

// ============ TOAST ============
function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error' | 'warning'; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-emerald-500' : type === 'error' ? 'bg-red-500' : 'bg-amber-500';
  const icon = type === 'success' ? <IconCheck /> : type === 'error' ? <IconX /> : <IconAlert />;

  return (
    <div className={`fixed top-4 right-4 z-[100] ${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-md`}>
      <div className="flex-shrink-0">{icon}</div>
      <p className="text-sm font-medium flex-1 whitespace-pre-line">{message}</p>
      <button onClick={onClose} className="flex-shrink-0 hover:opacity-70 transition">
        <IconX />
      </button>
    </div>
  );
}

// ============ APP ============
export default function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [salas, setSalas] = useState<any[]>([]);
  const [todasSalas, setTodasSalas] = useState<any[]>([]);
  const [reservas, setReservas] = useState<any[]>([]);
  const [isGestor, setIsGestor] = useState(false);
  const [selectedSala, setSelectedSala] = useState('');
  const [dataReserva, setDataReserva] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFim] = useState('');
  const [tipoReuniao, setTipoReuniao] = useState('Interna');
  const [qtdParticipantes, setQtdParticipantes] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'warning' } | null>(null);

  const [filtroData, setFiltroData] = useState(new Date().toISOString().split('T')[0]);
  const [filtroSala, setFiltroSala] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('todas');

  const [showUserManagement, setShowUserManagement] = useState(false);
  const [funcionariosAtivos, setFuncionariosAtivos] = useState<any[]>([]);
  const [novoFuncionarioEmail, setNovoFuncionarioEmail] = useState('');

  const [showRoomManagement, setShowRoomManagement] = useState(false);

  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');

  const DOMINIO_PERMITIDO = '@amradvogados.com.br';

  const showToast = (message: string, type: 'success' | 'error' | 'warning' = 'success') => {
    setToast({ message, type });
  };

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      if (session?.user) {
        await checkGestor(session.user.email);
        await carregarDados();
      }
      setLoading(false);
    };
    init();
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await checkGestor(session.user.email);
        await carregarDados();
      } else {
        setIsGestor(false);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const checkGestor = async (userEmail: string) => {
    const { data, error } = await supabase
      .from('gestores')
      .select('email')
      .eq('email', userEmail)
      .maybeSingle();
    setIsGestor(!!data && !error);
  };

  const carregarDados = async () => {
    const [{ data: dataSalas }, { data: dataReservas }] = await Promise.all([
      supabase.from('salas').select('*').order('nome'),
      supabase.from('reservas').select('*, salas(nome, capacidade_maxima)').order('data_reserva', { ascending: true }).order('hora_inicio', { ascending: true })
    ]);
    
    if (dataSalas) {
      setSalas(dataSalas.filter((s: any) => s.ativo));
      setTodasSalas(dataSalas);
      if (dataSalas.length > 0 && !selectedSala) setSelectedSala(dataSalas[0].id);
    }
    if (dataReservas) setReservas(dataReservas);
  };

  const carregarFuncionarios = async () => {
    const { data } = await supabase
      .from('funcionarios_ativos')
      .select('*')
      .order('email');
    if (data) setFuncionariosAtivos(data);
  };

  const adicionarFuncionario = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoFuncionarioEmail.toLowerCase().endsWith(DOMINIO_PERMITIDO)) {
      showToast('❌ Use apenas e-mails corporativos.', 'error');
      return;
    }
    const { error } = await supabase
      .from('funcionarios_ativos')
      .upsert({ email: novoFuncionarioEmail.toLowerCase(), ativo: true });
    
    if (error) {
      showToast('❌ Erro: ' + error.message, 'error');
    } else {
      showToast('✅ Funcionário adicionado com sucesso!', 'success');
      setNovoFuncionarioEmail('');
      await carregarFuncionarios();
    }
  };

  const toggleFuncionario = async (email: string, statusAtual: boolean) => {
    const { error } = await supabase
      .from('funcionarios_ativos')
      .update({ ativo: !statusAtual })
      .eq('email', email);
    
    if (error) {
      showToast('❌ Erro: ' + error.message, 'error');
    } else {
      showToast(statusAtual ? '🚫 Funcionário desativado' : '✅ Funcionário reativado', 'success');
      await carregarFuncionarios();
    }
  };

  const deletarFuncionario = async (email: string) => {
    if (!window.confirm(`Tem certeza que deseja DELETAR o usuário ${email}?\n\nEsta ação não pode ser desfeita e o usuário perderá o acesso ao sistema.`)) {
      return;
    }
    
    setSubmitLoading(true);
    
    // 1. Deletar da tabela funcionarios_ativos
    const { error: errorTabela } = await supabase
      .from('funcionarios_ativos')
      .delete()
      .eq('email', email);
    
    if (errorTabela) {
      showToast('❌ Erro ao remover da lista: ' + errorTabela.message, 'error');
      setSubmitLoading(false);
      return;
    }
    
    // 2. Deletar da autenticação do Supabase via função SQL
    const { error: errorAuth } = await supabase.rpc('deletar_usuario_auth', { 
      email_usuario: email 
    });
    
    setSubmitLoading(false);
    
    if (errorAuth) {
      // Se der erro na auth, avisa mas mantém a remoção da tabela
      showToast('⚠️ Usuário removido da lista, mas houve um erro na autenticação: ' + errorAuth.message, 'warning');
    } else {
      showToast('✅ Usuário deletado com sucesso!', 'success');
    }
    
    await carregarFuncionarios();
  };

  const toggleSalaAtiva = async (salaId: number, statusAtual: boolean) => {
    const { error } = await supabase
      .from('salas')
      .update({ ativo: !statusAtual })
      .eq('id', salaId);
    
    if (error) {
      showToast('❌ Erro: ' + error.message, 'error');
    } else {
      showToast(statusAtual ? '🚫 Sala desativada' : '✅ Sala reativada', 'success');
      await carregarDados();
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetMessage('');
    setResetLoading(true);
    
    if (!resetEmail.toLowerCase().endsWith(DOMINIO_PERMITIDO)) {
      setResetMessage('❌ Apenas e-mails corporativos são permitidos.');
      setResetLoading(false);
      return;
    }
    
    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail.toLowerCase(), {
      redirectTo: window.location.origin + '/',
    });
    
    setResetLoading(false);
    
    if (error) {
      setResetMessage('❌ Erro: ' + error.message);
    } else {
      setResetMessage('✅ E-mail de redefinição enviado! Verifique sua caixa de entrada (e o spam).');
      setTimeout(() => {
        setShowResetModal(false);
        setResetMessage('');
        setResetEmail('');
      }, 5000);
    }
  };

  const traduzirErro = (errorMsg: string) => {
    const msg = errorMsg.toLowerCase();
    if (msg.includes('invalid login credentials') || msg.includes('invalid email or password')) {
      return '❌ E-mail ou senha incorretos, ou conta não existe.\n\n Não tem conta? Clique em "Primeiro acesso? Criar conta" abaixo.';
    }
    if (msg.includes('email not confirmed') || msg.includes('email confirmation')) {
      return '️ Seu e-mail ainda não foi confirmado. Verifique sua caixa de entrada (e o spam) para ativar sua conta.';
    }
    if (msg.includes('too many requests') || msg.includes('rate limit')) {
      return '⏳ Muitas tentativas de login. Aguarde alguns minutos e tente novamente.';
    }
    if (msg.includes('already registered') || msg.includes('user already registered')) {
      return '⚠️ Este e-mail já está cadastrado no sistema. Tente fazer login.';
    }
    if (msg.includes('password') && msg.includes('weak')) {
      return '️ A senha é muito fraca. Use pelo menos 6 caracteres.';
    }
    return '❌ Erro: ' + errorMsg;
  };

  const handleResendConfirmation = async (emailParaReenviar: string) => {
    setAuthError(''); // Limpa o erro vermelho anterior
    setAuthLoading(true); // Mostra "Aguarde..." no botão
    
    const { error } = await supabase.auth.resend({ 
      type: 'signup', 
      email: emailParaReenviar.toLowerCase() 
    });
    
    setAuthLoading(false);

    if (error) {
      // Trata o erro de limite de tentativas do Supabase
      if (error.message.toLowerCase().includes('rate limit') || error.message.toLowerCase().includes('too many')) {
        setAuthError(' Por segurança, aguarde 5 minutos antes de solicitar um novo e-mail.');
      } else {
        setAuthError('❌ Erro ao reenviar: ' + error.message);
      }
    } else {
      // Mostra a mensagem de sucesso no lugar do erro vermelho
      setAuthError('✅ Um novo e-mail de confirmação foi enviado! Verifique sua caixa de entrada e o spam.');
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);
    
    try {
      // Validação de domínio
      if (!email.toLowerCase().endsWith(DOMINIO_PERMITIDO)) {
        const msg = `❌ Apenas e-mails corporativos são permitidos.\n\nSeu e-mail deve terminar com: ${DOMINIO_PERMITIDO}`;
        setAuthError(msg);
        showToast(msg, 'error');
        return;
      }
      
      // Validação de senha forte (apenas no cadastro)
      if (isRegistering) {
        const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!senhaForte.test(password)) {
          const msg = '❌ A senha deve ter pelo menos 8 caracteres, incluindo:\n• 1 letra maiúscula\n• 1 letra minúscula\n• 1 número';
          setAuthError(msg);
          showToast('Senha fraca', 'error');
          setAuthLoading(false);
          return;
        }
      }

      if (isRegistering) {
        // PRIMEIRO: Verifica se está autorizado
        const { data: funcionarioAtivo, error: funcError } = await supabase
          .from('funcionarios_ativos')
          .select('ativo')
          .eq('email', email.toLowerCase())
          .maybeSingle();
        
        if (funcError || !funcionarioAtivo || !funcionarioAtivo.ativo) {
          setAuthError('❌ Seu e-mail não está autorizado. Contate o gestor para ser adicionado à lista.');
          showToast('❌ E-mail não autorizado', 'error');
          setAuthLoading(false);
          return;
        }
        
        // SEGUNDO: Tenta criar diretamente
        const { data, error } = await supabase.auth.signUp({ 
          email: email.toLowerCase(), 
          password 
        });
        
        if (error) {
          // Se for erro de "já existe", mostra mensagem amigável
          if (error.message.includes('already registered') || error.message.includes('User already registered')) {
            setAuthError('⚠️ Este e-mail já está cadastrado. Tente fazer login ou recupere sua senha.');
            showToast('E-mail já cadastrado', 'warning');
          } else {
            const msg = traduzirErro(error.message);
            setAuthError(msg);
            showToast(msg, 'error');
          }
          setAuthLoading(false);
          return;
        }
        
        // Sucesso!
        showToast('✅ Cadastro realizado! Faça login.', 'success');
        setEmail('');
        setPassword('');
        setIsRegistering(false);
      }

    } catch (err: any) {
      const msg = traduzirErro(err.message);
      setAuthError(msg);
      showToast(msg, 'error');
    } finally {
      // GARANTE que sempre vai resetar o loading
      setAuthLoading(false);
    }
  };
  
  const handleNovaReserva = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSala || !dataReserva || !horaInicio || !horaFim || !qtdParticipantes) {
      showToast('⚠️ Preencha todos os campos.', 'warning');
      return;
    }
    const salaEscolhida = salas.find(s => s.id === parseInt(selectedSala));
    const qtd = parseInt(qtdParticipantes);
    if (qtd < 1) {
      showToast('⚠️ A quantidade de participantes deve ser pelo menos 1.', 'warning');
      return;
    }
    
    if (!isGestor && qtd > salaEscolhida.capacidade_maxima) {
      showToast(`️ A capacidade máxima da ${salaEscolhida.nome} é de ${salaEscolhida.capacidade_maxima} pessoas.`, 'warning');
      return;
    }
    
    if (horaFim <= horaInicio) {
      showToast('️ O horário de término deve ser posterior ao horário de início.', 'warning');
      return;
    }
    const hoje = new Date().toISOString().split('T')[0];
    if (dataReserva < hoje) {
      showToast('⚠️ Não é possível reservar datas passadas.', 'warning');
      return;
    }
    const conflito = reservas.some(r =>
      (r.status === 'aprovada' || r.status === 'pendente') &&
      r.sala_id === salaEscolhida.id &&
      r.data_reserva === dataReserva &&
      ((horaInicio >= r.hora_inicio && horaInicio < r.hora_fim) ||
       (horaFim > r.hora_inicio && horaFim <= r.hora_fim) ||
       (horaInicio <= r.hora_inicio && horaFim >= r.hora_fim))
    );
    if (conflito) {
      showToast('️ Conflito de Horário! Esta sala já possui uma reserva para este período.', 'warning');
      return;
    }
    setSubmitLoading(true);
    const { error } = await supabase.from('reservas').insert([{
      usuario_email: user.email,
      sala_id: salaEscolhida.id,
      data_reserva: dataReserva,
      hora_inicio: horaInicio,
      hora_fim: horaFim,
      tipo_reuniao: tipoReuniao,
      quantidade_participantes: qtd,
      status: isGestor ? 'aprovada' : 'pendente'
    }]);
    setSubmitLoading(false);
    if (error) {
      showToast('❌ Erro ao enviar: ' + error.message, 'error');
    } else {
      showToast(isGestor ? '✅ Reserva criada e aprovada automaticamente!' : '✅ Solicitação enviada! Aguarde a avaliação do gestor.', 'success');
      setQtdParticipantes('');
      setHoraInicio('');
      setHoraFim('');
      await carregarDados();
    }
  };

  const alterarStatusReserva = async (id: number, novoStatus: string) => {
    const { error } = await supabase.from('reservas').update({ status: novoStatus }).eq('id', id);
    if (error) {
      showToast('❌ Erro: ' + error.message, 'error');
    } else {
      showToast(novoStatus === 'aprovada' ? '✅ Reserva aprovada!' : '✅ Reserva recusada!', 'success');
      await carregarDados();
    }
  };

  const cancelarReserva = async (id: number) => {
    if (!window.confirm('Tem certeza que deseja cancelar esta reserva? Esta ação não pode ser desfeita.')) {
      return;
    }
    const { error } = await supabase.from('reservas').delete().eq('id', id);
    if (error) {
      showToast('❌ Erro ao cancelar: ' + error.message, 'error');
    } else {
      showToast('✅ Reserva cancelada com sucesso!', 'success');
      await carregarDados();
    }
  };

  const filtrarReservas = (reservasLista: any[]) => {
    return reservasLista.filter(r => {
      if (filtroData && r.data_reserva !== filtroData) return false;
      if (filtroSala && r.sala_id !== parseInt(filtroSala)) return false;
      if (isGestor && filtroStatus !== 'todas') {
        if (filtroStatus === 'aprovadas' && r.status !== 'aprovada') return false;
        if (filtroStatus === 'pendentes' && r.status !== 'pendente') return false;
      }
      return true;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #263448 0%, #1a2633 100%)' }}>
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-[#E7BE92] border-t-transparent rounded-full animate-spin" />
          <p className="text-white text-sm font-medium">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex" style={{ fontFamily: 'Inter, sans-serif' }}>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        
        <div 
          className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between text-white relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #263448 0%, #1a2633 100%)'
          }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <IconLogoAMR />
            </div>
            <p className="text-white/70 text-sm mt-4">Sistema Corporativo de Reservas de Salas</p>
          </div>
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-bold leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Gestão inteligente <br />de salas de reunião
            </h2>
            <p className="text-white/70 text-lg max-w-md">
              Controle de ocupação, aprovação em tempo real e visão completa da agenda de salas de reunião da AMR Advogados.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold" style={{ color: '#E7BE92' }}>3</div>
                <div className="text-sm text-white/60">Salas</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: '#E7BE92' }}>24/7</div>
                <div className="text-sm text-white/60">Disponível</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: '#E7BE92' }}>100%</div>
                <div className="text-sm text-white/60">Online</div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 text-sm text-white/150">
            © 2026 AMR Advogados • Abegg, Macorim & Rotta
          </div>
          <div className="relative z-10 text-sm text-white/50">
            Desenvolvido por Alvimar Godinho & IA
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
          <div className="w-full max-w-md">
            <div className="lg:hidden flex items-center justify-center mb-8">
              <div className="bg-[#263448] rounded-2xl p-4">
                <IconLogoAMR size="small" />
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#263448] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                {isRegistering ? 'Criar sua conta' : 'Bem-vindo de volta'}
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                {isRegistering ? 'Use seu e-mail corporativo' : 'Entre com suas credenciais'}
              </p>
              
              <form onSubmit={handleAuth} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail corporativo</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required
                    placeholder={`seu.nome${DOMINIO_PERMITIDO}`}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] focus:border-transparent outline-none transition" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Senha</label>
                  <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] focus:border-transparent outline-none transition" 
                  />
                </div>
                
                {authError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-700 text-xs whitespace-pre-line">{authError}</p>
                    {!isRegistering && (
                      <div className="mt-2 flex flex-col gap-2">
                        {authError.toLowerCase().includes('confirm') && (
                          <button 
                            onClick={() => handleResendConfirmation(email)}
                            className="text-xs text-blue-600 hover:text-blue-700 font-semibold underline text-left"
                          >
                             Reenviar e-mail de confirmação
                          </button>
                        )}
                        <button 
                          onClick={() => { setIsRegistering(true); setAuthError(''); }}
                          className="text-xs text-[#633627] hover:text-[#633627]/80 font-semibold underline text-left"
                        >
                           Criar minha conta agora
                        </button>
                      </div>
                    )}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={authLoading}
                  className="w-full bg-[#263448] text-white py-2.5 rounded-xl font-semibold hover:bg-[#1a2633] transition disabled:opacity-50"
                >
                  {authLoading ? 'Aguarde...' : (isRegistering ? 'Criar conta' : 'Entrar')}
                </button>
              </form>
              
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl flex gap-2">
                <div className="flex-shrink-0 mt-0.5 text-amber-600"><IconAlert /></div>
                <p className="text-xs text-amber-800">Apenas e-mails do domínio corporativo são permitidos.</p>
              </div>
              
              <button 
                onClick={() => setShowResetModal(true)}
                className="w-full mt-3 text-sm text-[#633627] hover:text-[#633627]/80 transition text-center font-medium flex items-center justify-center gap-1.5"
              >
                <IconKey /> Esqueci minha senha
              </button>
              
              <button 
                onClick={() => { setIsRegistering(!isRegistering); setAuthError(''); }}
                className="w-full mt-2 text-sm text-gray-500 hover:text-[#263448] transition text-center"
              >
                {isRegistering ? 'Já tenho conta → Fazer login' : 'Primeiro acesso? Criar conta'}
              </button>
            </div>
          </div>
        </div>

        {showResetModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#263448] rounded-xl p-3">
                  <IconLogoAMR size="small" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#263448] text-center mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Recuperar Senha
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Digite seu e-mail corporativo e enviaremos um link para redefinir sua senha.
              </p>
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail corporativo</label>
                  <input 
                    type="email" 
                    value={resetEmail} 
                    onChange={e => setResetEmail(e.target.value)} 
                    required
                    placeholder={`seu.nome${DOMINIO_PERMITIDO}`}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none" 
                  />
                </div>
                {resetMessage && (
                  <div className={`p-3 rounded-xl text-sm ${
                    resetMessage.includes('✅') ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {resetMessage}
                  </div>
                )}
                <button 
                  type="submit" 
                  disabled={resetLoading}
                  className="w-full bg-[#263448] text-white py-2.5 rounded-xl font-semibold hover:bg-[#1a2633] transition disabled:opacity-50"
                >
                  {resetLoading ? 'Enviando...' : 'Enviar link de recuperação'}
                </button>
              </form>
              <button 
                onClick={() => { setShowResetModal(false); setResetMessage(''); setResetEmail(''); }}
                className="w-full mt-3 text-sm text-gray-500 hover:text-gray-700 transition text-center"
              >
                Voltar para o login
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  const reservasAtivas = reservas.filter(r => r.status !== 'recusada');
  const reservasPendentes = reservas.filter(r => r.status === 'pendente');
  const reservasFiltradas = filtrarReservas(reservasAtivas);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="rounded-xl p-2 flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, #263448 0%, #1a2633 100%)'
              }}
            >
              <div className="text-white font-bold text-lg tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>
                AMR
              </div>
            </div>
            <div>
              <h1 className="font-bold text-[#263448]" style={{ fontFamily: 'Georgia, serif' }}>AgendaSalas</h1>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isGestor && (
              <>
                <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                  <IconShield /> Gestor
                </span>
                <button 
                  onClick={() => { setShowRoomManagement(true); }}
                  className="flex items-center gap-2 px-4 py-2 text-[#263448] hover:bg-[#263448]/10 rounded-xl transition text-sm font-medium border border-[#263448]/20"
                >
                  <IconBuilding /> Gerenciar Salas
                </button>
                <button 
                  onClick={() => { setShowUserManagement(true); carregarFuncionarios(); }}
                  className="flex items-center gap-2 px-4 py-2 text-[#633627] hover:bg-[#633627]/10 rounded-xl transition text-sm font-medium border border-[#633627]/20"
                >
                  <IconUsers /> Gerenciar Usuários
                </button>
              </>
            )}
            <button 
              onClick={() => supabase.auth.signOut()}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition text-sm font-medium"
            >
              <IconLogOut /> Sair
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold mb-4 text-[#263448] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
              <div className="w-8 h-8 bg-[#263448]/10 rounded-lg flex items-center justify-center text-[#263448]">
                <IconCalendar />
              </div>
              Solicitar Nova Reserva
              {isGestor && <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Aprovação automática</span>}
            </h2>
            <form onSubmit={handleNovaReserva} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Escolha a Sala</label>
                <select value={selectedSala} onChange={e => setSelectedSala(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none bg-white">
                  {salas.map(s => <option key={s.id} value={s.id}>{s.nome} (Máx: {s.capacidade_maxima} pessoas)</option>)}
                </select>
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-1.5">
                  <IconCalendar /> Data da Reunião
                </label>
                <input type="date" value={dataReserva} onChange={e => setDataReserva(e.target.value)}
                  min={new Date().toISOString().split('T')[0]} required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-1.5">
                    <IconClock /> Início
                  </label>
                  <input type="time" value={horaInicio} onChange={e => setHoraInicio(e.target.value)} required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none" />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-1.5">
                    <IconClock /> Término
                  </label>
                  <input type="time" value={horaFim} onChange={e => setHoraFim(e.target.value)} required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tipo de Reunião</label>
                <select value={tipoReuniao} onChange={e => setTipoReuniao(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none bg-white">
                  <option value="Interna">Interna (Equipe AMR)</option>
                  <option value="Externa">Externa (Clientes)</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-1.5">
                  <IconUsers /> Participantes
                  {isGestor && <span className="text-xs text-[#633627]">(Sem limite)</span>}
                </label>
                <input type="number" value={qtdParticipantes} onChange={e => setQtdParticipantes(e.target.value)}
                  required min="1" placeholder="Ex: 4"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none" />
              </div>
              <button type="submit" disabled={submitLoading}
                className="w-full bg-[#263448] text-white py-3 rounded-xl font-semibold hover:bg-[#1a2633] transition disabled:opacity-50 flex items-center justify-center gap-2">
                <IconSend />
                {submitLoading ? 'Enviando...' : (isGestor ? 'Criar Reserva Aprovada' : 'Enviar ao gestor')}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-lg font-bold mb-4 text-[#263448] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
                <div className="w-8 h-8 bg-[#263448]/10 rounded-lg flex items-center justify-center text-[#263448]">
                  <IconFilter />
                </div>
                Filtros de Visualização
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Data</label>
                  <input type="date" value={filtroData} onChange={e => setFiltroData(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E7BE92] outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Sala</label>
                  <select value={filtroSala} onChange={e => setFiltroSala(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E7BE92] outline-none bg-white text-sm">
                    <option value="">Todas as salas</option>
                    {salas.map(s => <option key={s.id} value={s.id}>{s.nome}</option>)}
                  </select>
                </div>
                {isGestor && (
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Status</label>
                    <select value={filtroStatus} onChange={e => setFiltroStatus(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E7BE92] outline-none bg-white text-sm">
                      <option value="todas">Todas</option>
                      <option value="aprovadas">Aprovadas</option>
                      <option value="pendentes">Pendentes</option>
                    </select>
                  </div>
                )}
              </div>
              {(filtroData || filtroSala || (isGestor && filtroStatus !== 'todas')) && (
                <button onClick={() => { setFiltroData(new Date().toISOString().split('T')[0]); setFiltroSala(''); setFiltroStatus('todas'); }}
                  className="mt-3 text-xs text-[#633627] hover:text-[#633627]/80 font-medium">
                  Limpar filtros
                </button>
              )}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-lg font-bold mb-4 text-[#263448] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
                <div className="w-8 h-8 bg-[#263448]/10 rounded-lg flex items-center justify-center text-[#263448]">
                  <IconCalendar />
                </div>
                Ocupação das Salas
                <span className="text-sm font-normal text-gray-500">({reservasFiltradas.length} {reservasFiltradas.length === 1 ? 'reserva' : 'reservas'})</span>
              </h2>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {reservasFiltradas.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400">
                      <IconCalendar />
                    </div>
                    <p className="text-gray-500 text-sm">
                      {reservasAtivas.length === 0 ? 'Nenhum compromisso marcado nas salas.' : 'Nenhuma reserva encontrada com os filtros selecionados.'}
                    </p>
                  </div>
                ) : (
                  reservasFiltradas.map(r => (
                    <div key={r.id} className={`p-4 rounded-xl border-l-4 shadow-sm flex justify-between items-center transition hover:shadow-md ${
                      r.status === 'aprovada' ? 'border-emerald-500 bg-emerald-50' : 'border-amber-500 bg-amber-50'
                    }`}>
                      <div className="flex-1">
                        <div className="font-bold text-gray-800">{r.salas?.nome} — {r.tipo_reuniao}</div>
                        <div className="text-sm text-gray-600 mt-1 flex items-center gap-3">
                          <span className="flex items-center gap-1"><IconCalendar /> {r.data_reserva.split('-').reverse().join('/')}</span>
                          <span className="flex items-center gap-1"><IconClock /> {r.hora_inicio.substring(0,5)} - {r.hora_fim.substring(0,5)}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <IconUsers /> {r.usuario_email} • {r.quantidade_participantes} pessoas
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                          r.status === 'aprovada' ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-800'
                        }`}>
                          {r.status === 'aprovada' ? 'Confirmado' : 'Pendente'}
                        </span>
                        {isGestor && r.status === 'aprovada' && (
                          <button 
                            onClick={() => cancelarReserva(r.id)}
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
                            title="Cancelar reserva"
                          >
                            <IconTrash />
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {isGestor && (
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h2 className="text-lg font-bold mb-4 text-[#263448] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    <IconShield />
                  </div>
                  Aprovações Pendentes
                  {reservasPendentes.length > 0 && (
                    <span className="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{reservasPendentes.length}</span>
                  )}
                </h2>
                <div className="space-y-3">
                  {reservasPendentes.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 text-emerald-600">
                        <IconCheck />
                      </div>
                      <p className="text-gray-600 text-sm">Tudo em dia! Nenhuma solicitação pendente.</p>
                    </div>
                  ) : (
                    reservasPendentes.map(r => (
                      <div key={r.id} className="p-4 rounded-xl border-l-4 border-amber-500 bg-amber-50 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="font-bold text-gray-800">{r.salas?.nome}</div>
                            <div className="text-xs text-gray-500">{r.usuario_email}</div>
                          </div>
                          <span className="text-xs font-bold px-2 py-1 bg-amber-200 text-amber-800 rounded-full">Aguardando</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-3 pb-3 border-b border-gray-200">
                          <div><div className="text-gray-400">Data</div><div className="font-medium">{r.data_reserva.split('-').reverse().join('/')}</div></div>
                          <div><div className="text-gray-400">Horário</div><div className="font-medium">{r.hora_inicio.substring(0,5)} - {r.hora_fim.substring(0,5)}</div></div>
                          <div><div className="text-gray-400">Pessoas</div><div className="font-medium">{r.quantidade_participantes}</div></div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => alterarStatusReserva(r.id, 'aprovada')}
                            className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition text-sm font-medium">
                            <IconCheck /> Aprovar
                          </button>
                          <button onClick={() => alterarStatusReserva(r.id, 'recusada')}
                            className="flex-1 flex items-center justify-center gap-1.5 bg-white text-red-600 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition text-sm font-medium">
                            <IconX /> Recusar
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showUserManagement && isGestor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#263448] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
                  <IconUsers /> Gestão de Usuários
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {funcionariosAtivos.filter(f => f.ativo).length} ativos • {funcionariosAtivos.filter(f => !f.ativo).length} desativados
                </p>
              </div>
              <button onClick={() => setShowUserManagement(false)}
                className="text-gray-400 hover:text-gray-600 transition">
                <IconX />
              </button>
            </div>
            
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <form onSubmit={adicionarFuncionario} className="flex gap-2">
                <input type="email" value={novoFuncionarioEmail} onChange={e => setNovoFuncionarioEmail(e.target.value)}
                  placeholder={`novo.funcionario${DOMINIO_PERMITIDO}`} required
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none" />
                <button type="submit"
                  className="bg-[#263448] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#1a2633] transition">
                  Adicionar
                </button>
              </form>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {funcionariosAtivos.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Nenhum funcionário cadastrado.</p>
              ) : (
                <div className="space-y-2">
                  {funcionariosAtivos.map(f => (
                    <div key={f.email} className={`p-4 rounded-xl border flex items-center justify-between ${
                      f.ativo ? 'border-emerald-200 bg-emerald-50' : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          f.ativo ? 'bg-emerald-500 text-white' : 'bg-gray-300 text-gray-600'
                        }`}>
                          {f.email.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{f.email}</div>
                          <div className="text-xs text-gray-500">
                            {f.ativo ? '✅ Ativo' : '🚫 Desativado'} • Desde {new Date(f.criado_em).toLocaleDateString('pt-BR')}
                          </div>
                        </div>
                      </div>
                      <button onClick={() => toggleFuncionario(f.email, f.ativo)}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                          f.ativo 
                            ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                            : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                        }`}>
                        {f.ativo ? 'Desativar' : 'Reativar'}
                      </button>
                      <button onClick={() => deletarFuncionario(f.email)}
                        className="px-4 py-2 rounded-lg font-medium text-sm transition bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1"
                        title="Deletar usuário permanentemente"
                      >
                        <IconTrash /> Deletar
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showRoomManagement && isGestor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#263448] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
                  <IconBuilding /> Gestão de Salas
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {todasSalas.filter(s => s.ativo).length} ativas • {todasSalas.filter(s => !s.ativo).length} inativas
                </p>
              </div>
              <button onClick={() => setShowRoomManagement(false)}
                className="text-gray-400 hover:text-gray-600 transition">
                <IconX />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {todasSalas.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Nenhuma sala cadastrada.</p>
              ) : (
                <div className="space-y-2">
                  {todasSalas.map(s => (
                    <div key={s.id} className={`p-4 rounded-xl border flex items-center justify-between ${
                      s.ativo ? 'border-emerald-200 bg-emerald-50' : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                          s.ativo ? 'bg-[#263448] text-white' : 'bg-gray-300 text-gray-600'
                        }`}>
                          <IconBuilding />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{s.nome}</div>
                          <div className="text-xs text-gray-500">
                            {s.ativo ? '✅ Disponível para reservas' : '🚫 Em manutenção/reforma'} • Capacidade: {s.capacidade_maxima} pessoas
                          </div>
                        </div>
                      </div>
                      <button onClick={() => toggleSalaAtiva(s.id, s.ativo)}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition flex items-center gap-1.5 ${
                          s.ativo 
                            ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                            : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                        }`}>
                        <IconPower />
                        {s.ativo ? 'Desativar' : 'Reativar'}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}