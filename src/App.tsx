import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Ícones SVG
const IconLogoAMR = ({ size = 'large' }: { size?: 'large' | 'small' }) => (
  <div className={`text-white font-bold ${size === 'large' ? 'text-3xl' : 'text-lg'} tracking-tighter`} style={{ fontFamily: 'Georgia, serif' }}>
    AMR
  </div>
);

const IconCalendar = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconClock = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconUsers = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const IconX = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconShield = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconBuilding = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const IconLogOut = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const IconKey = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </svg>
);

const IconAlert = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const IconFilter = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

// Toast Component
function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error' | 'warning'; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-emerald-500' : type === 'error' ? 'bg-red-500' : 'bg-amber-500';

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center gap-2 animate-slide-in`}>
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-75">
        <IconX />
      </button>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isGestor, setIsGestor] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'warning' } | null>(null);
  const [salas, setSalas] = useState<any[]>([]);
  const [reservas, setReservas] = useState<any[]>([]);
  const [selectedSala, setSelectedSala] = useState('');
  const [dataReserva, setDataReserva] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFim] = useState('');
  const [tipoReuniao, setTipoReuniao] = useState('Interna');
  const [qtdParticipantes, setQtdParticipantes] = useState('');
  const [observacao, setObservacao] = useState('');
  const [semObservacao, setSemObservacao] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [filtroDataInicio, setFiltroDataInicio] = useState(new Date().toISOString().split('T')[0]);
  const [filtroDataFim, setFiltroDataFim] = useState(new Date().toISOString().split('T')[0]);
  const [filtroSala, setFiltroSala] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('todas');
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [funcionariosAtivos, setFuncionariosAtivos] = useState<any[]>([]);
  const [novoFuncionarioEmail, setNovoFuncionarioEmail] = useState('');
  const [novoFuncionarioNome, setNovoFuncionarioNome] = useState('');
  const [showRoomManagement, setShowRoomManagement] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetPasswordLoading, setResetPasswordLoading] = useState(false);
  const [editandoObsId, setEditandoObsId] = useState<number | null>(null);
  const [novaObsEditada, setNovaObsEditada] = useState('');
  const [nomeUsuarioLogado, setNomeUsuarioLogado] = useState('');

  const DOMINIO_PERMITIDO = '@amradvogados.com.br';

  const showToast = (message: string, type: 'success' | 'error' | 'warning' = 'success') => {
    setToast({ message, type });
  };

  // Data atual no fuso horário LOCAL
  const agoraLocal = new Date();
  const hojeLocal = `${agoraLocal.getFullYear()}-${String(agoraLocal.getMonth() + 1).padStart(2, '0')}-${String(agoraLocal.getDate()).padStart(2, '0')}`;

  useEffect(() => {
    // Verifica se veio do link de recuperação de senha
    const hash = window.location.hash;
    if (hash.includes('type=recovery') || hash.includes('access_token')) {
      setShowResetPasswordForm(true);
      setLoading(false);
      return;
    }

    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      if (session?.user) {
        await checkGestor(session.user.email);
        
        // Buscar o nome do usuário logado
        const { data: funcData } = await supabase
          .from('funcionarios_ativos')
          .select('nome')
          .eq('email', session.user.email)
          .maybeSingle();
        
        setNomeUsuarioLogado(funcData?.nome || session.user.email.split('@')[0]);
        await carregarDados();
      }
      setLoading(false);
    };
    init();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await checkGestor(session.user.email);
        
        const { data: funcData } = await supabase
          .from('funcionarios_ativos')
          .select('nome')
          .eq('email', session.user.email)
          .maybeSingle();
        
        setNomeUsuarioLogado(funcData?.nome || session.user.email.split('@')[0]);
        await carregarDados();
      } else {
        setIsGestor(false);
        setNomeUsuarioLogado('');
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const checkGestor = async (email: string) => {
    const { data } = await supabase
      .from('funcionarios_ativos')
      .select('gestor')
      .eq('email', email)
      .maybeSingle();
    setIsGestor(data?.gestor || false);
  };

  const carregarDados = async () => {
    const [{ data: dataSalas }, { data: dataReservas }] = await Promise.all([
      supabase.from('salas').select('*').order('nome'),
      supabase.from('reservas').select('*, salas(nome, capacidade_maxima)').order('data_reserva', { ascending: true }).order('hora_inicio', { ascending: true })
    ]);
    if (dataSalas) {
      setSalas(dataSalas.filter((s: any) => s.ativo));
    }
    if (dataReservas) setReservas(dataReservas);
  };

  const carregarFuncionarios = async () => {
    const { data } = await supabase
      .from('funcionarios_ativos')
      .select('*')
      .order('nome');
    if (data) setFuncionariosAtivos(data);
  };

  const filtrarReservas = (reservasLista: any[]) => {
    return reservasLista.filter(r => {
      if (filtroDataInicio && r.data_reserva < filtroDataInicio) return false;
      if (filtroDataFim && r.data_reserva > filtroDataFim) return false;
      if (filtroSala && r.sala_id !== parseInt(filtroSala)) return false;
      if (isGestor && filtroStatus !== 'todas') {
        if (filtroStatus === 'aprovadas' && r.status !== 'aprovada') return false;
        if (filtroStatus === 'pendentes' && r.status !== 'pendente') return false;
      }
      return true;
    });
  };

  const reservasFiltradas = filtrarReservas(reservas);
  const reservasPendentes = reservas.filter(r => r.status === 'pendente');

  // Cria um mapa rápido para converter e-mail em nome
  const emailParaNome = React.useMemo(() => {
    const map: Record<string, string> = {};
    funcionariosAtivos.forEach((f: any) => {
      if (f.nome) map[f.email] = f.nome;
    });
    return map;
  }, [funcionariosAtivos]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);

    try {
      if (!email.toLowerCase().endsWith(DOMINIO_PERMITIDO)) {
        const msg = `❌ Apenas e-mails corporativos são permitidos.\n\nSeu e-mail deve terminar com: ${DOMINIO_PERMITIDO}`;
        setAuthError(msg);
        showToast(msg, 'error');
        setAuthLoading(false);
        return;
      }

      if (isRegistering) {
        const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!senhaForte.test(password)) {
          const msg = '❌ A senha deve ter pelo menos 8 caracteres, incluindo:\n• 1 letra maiúscula\n• 1 letra minúscula\n• 1 número';
          setAuthError(msg);
          showToast('Senha fraca', 'error');
          setAuthLoading(false);
          return;
        }

        const { data: funcionarioAtivo } = await supabase
          .from('funcionarios_ativos')
          .select('ativo')
          .eq('email', email.toLowerCase())
          .maybeSingle();

        if (!funcionarioAtivo || !funcionarioAtivo.ativo) {
          setAuthError('❌ Seu e-mail não está autorizado. Contate o gestor.');
          showToast('E-mail não autorizado', 'error');
          setAuthLoading(false);
          return;
        }

        const { error } = await supabase.auth.signUp({
          email: email.toLowerCase(),
          password
        });

        if (error) {
          if (error.message.includes('already registered')) {
            setAuthError('⚠️ Este e-mail já está cadastrado. Tente fazer login.');
          } else {
            setAuthError('❌ Erro: ' + error.message);
          }
          showToast('Erro no cadastro', 'error');
          setAuthLoading(false);
          return;
        }

        showToast('✅ Cadastro realizado! Faça login.', 'success');
        setEmail('');
        setPassword('');
        setIsRegistering(false);
        setAuthLoading(false);

      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.toLowerCase(),
          password
        });

        if (error) {
          const msg = traduzirErro(error.message);
          setAuthError(msg);
          showToast(msg, 'error');
          setAuthLoading(false);
          return;
        }

        const { data: funcionarioAtivo } = await supabase
          .from('funcionarios_ativos')
          .select('ativo')
          .eq('email', email.toLowerCase())
          .maybeSingle();

        if (!funcionarioAtivo || !funcionarioAtivo.ativo) {
          await supabase.auth.signOut();
          setAuthError('❌ Sua conta foi desativada. Contate o gestor.');
          showToast('Conta desativada', 'error');
          setAuthLoading(false);
          return;
        }

        setAuthLoading(false);
      }
    } catch (err: any) {
      console.error('Erro inesperado:', err);
      setAuthError(' Erro inesperado: ' + err.message);
      showToast('Erro inesperado', 'error');
      setAuthLoading(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetPasswordLoading(true);

    if (newPassword.length < 8) {
      showToast('❌ A senha deve ter pelo menos 8 caracteres', 'error');
      setResetPasswordLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      showToast('❌ As senhas não coincidem', 'error');
      setResetPasswordLoading(false);
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setResetPasswordLoading(false);

    if (error) {
      showToast('❌ Erro: ' + error.message, 'error');
    } else {
      showToast('✅ Senha atualizada! Faça login.', 'success');
      setShowResetPasswordForm(false);
      setNewPassword('');
      setConfirmPassword('');
      await supabase.auth.signOut();
      window.location.hash = '';
    }
  };

  const handleNovaReserva = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSala) {
      showToast('⚠️ Por favor, selecione uma sala para a reserva.', 'warning');
      return;
    }

    if (!dataReserva || !horaInicio || !horaFim || !qtdParticipantes) {
      showToast('⚠️ Preencha todos os campos.', 'warning');
      return;
    }

    if (dataReserva < hojeLocal) {
      showToast('⚠️ Não é possível reservar datas passadas.', 'warning');
      return;
    }

    if (dataReserva === hojeLocal) {
      const agora = new Date();
      const horaAtual = agora.toTimeString().substring(0, 5);
      const horaInicioLimpa = horaInicio.substring(0, 5);

      if (horaInicioLimpa <= horaAtual) {
        showToast('⚠️ Não é possível reservar um horário que já passou no dia de hoje.', 'warning');
        return;
      }
    }

    if (!semObservacao && observacao.trim() === '') {
      showToast('⚠️ Preencha a observação ou marque a caixa "Sem observações".', 'warning');
      return;
    }

    setSubmitLoading(true);

    const qtd = parseInt(qtdParticipantes);
    const { error } = await supabase.from('reservas').insert([{
      usuario_email: user.email,
      sala_id: parseInt(selectedSala),
      data_reserva: dataReserva,
      hora_inicio: horaInicio,
      hora_fim: horaFim,
      tipo_reuniao: tipoReuniao,
      quantidade_participantes: qtd,
      observacao: semObservacao ? 'Sem observações' : observacao,
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
      setObservacao('');
      setSemObservacao(false);
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
    if (!window.confirm('Tem certeza que deseja cancelar esta reserva?')) {
      return;
    }
    const { error } = await supabase.from('reservas').delete().eq('id', id);
    if (error) {
      showToast('❌ Erro: ' + error.message, 'error');
    } else {
      showToast('✅ Reserva cancelada!', 'success');
      await carregarDados();
    }
  };

  const adicionarFuncionario = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoFuncionarioEmail.toLowerCase().endsWith(DOMINIO_PERMITIDO)) {
      showToast('❌ Use apenas e-mails corporativos.', 'error');
      return;
    }
    if (!novoFuncionarioNome.trim()) {
      showToast('❌ Informe o nome do funcionário.', 'error');
      return;
    }

    const { error } = await supabase
      .from('funcionarios_ativos')
      .upsert({
        email: novoFuncionarioEmail.toLowerCase(),
        nome: novoFuncionarioNome.trim(),
        ativo: true
      });

    if (error) {
      showToast('❌ Erro: ' + error.message, 'error');
    } else {
      showToast('✅ Funcionário adicionado com sucesso!', 'success');
      setNovoFuncionarioEmail('');
      setNovoFuncionarioNome('');
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
    if (!window.confirm(`Tem certeza que deseja DELETAR o usuário ${email}?\n\nEsta ação não pode ser desfeita.`)) {
      return;
    }

    setSubmitLoading(true);

    const { error: errorTabela } = await supabase
      .from('funcionarios_ativos')
      .delete()
      .eq('email', email);

    if (errorTabela) {
      showToast('❌ Erro ao remover da lista: ' + errorTabela.message, 'error');
      setSubmitLoading(false);
      return;
    }

    const { data: authResult, error: errorAuth } = await supabase.rpc('deletar_usuario_auth', {
      email_usuario: email
    });

    setSubmitLoading(false);

    if (errorAuth) {
      showToast('⚠️ Usuário removido da lista, mas erro na autenticação: ' + errorAuth.message, 'warning');
    } else if (authResult && !authResult.success) {
      showToast(`ℹ️ ${authResult.message}`, 'warning');
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
      showToast(statusAtual ? '🚫 Sala desativada' : '✅ Sala ativada', 'success');
      await carregarDados();
    }
  };

  const salvarObservacaoGestor = async (id: number) => {
    const { error } = await supabase
      .from('reservas')
      .update({ observacao: novaObsEditada })
      .eq('id', id);

    if (error) {
      showToast('❌ Erro ao salvar: ' + error.message, 'error');
    } else {
      showToast('✅ Observação atualizada!', 'success');
      setEditandoObsId(null);
      await carregarDados();
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetLoading(true);
    setResetMessage('');

    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: window.location.origin
    });

    setResetLoading(false);

    if (error) {
      setResetMessage(' Erro: ' + error.message);
    } else {
      setResetMessage('✅ Link de recuperação enviado! Verifique seu e-mail.');
    }
  };

  const traduzirErro = (errorMsg: string) => {
    const msg = errorMsg.toLowerCase();
    if (msg.includes('invalid login credentials') || msg.includes('invalid email or password')) {
      return '❌ E-mail ou senha incorretos, ou conta não existe.\n\nNão tem conta? Clique em "Primeiro acesso? Criar conta" abaixo.';
    }
    if (msg.includes('email not confirmed') || msg.includes('email confirmation')) {
      return '⚠️ Seu e-mail ainda não foi confirmado. Verifique sua caixa de entrada (e o spam) para ativar sua conta.';
    }
    if (msg.includes('too many requests') || msg.includes('rate limit')) {
      return '⏳ Muitas tentativas. Aguarde alguns minutos e tente novamente.';
    }
    return '❌ Erro: ' + errorMsg;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#263448] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (showResetPasswordForm) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-[#263448] rounded-xl p-3">
              <IconLogoAMR size="small" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-[#263448] text-center mb-1" style={{ fontFamily: 'Georgia, serif' }}>
            Redefinir Senha
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Digite sua nova senha
          </p>

          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Nova Senha</label>
              <input
                type="password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                required
                placeholder="Mínimo 8 caracteres"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirmar Senha</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
                placeholder="Digite novamente"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={resetPasswordLoading}
              className="w-full bg-[#263448] text-white py-2.5 rounded-xl font-semibold hover:bg-[#1a2633] transition disabled:opacity-50"
            >
              {resetPasswordLoading ? 'Atualizando...' : 'Atualizar Senha'}
            </button>
          </form>

          <button
            onClick={() => { setShowResetPasswordForm(false); window.location.hash = ''; }}
            className="w-full mt-3 text-sm text-gray-500 hover:text-gray-700 transition text-center"
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#263448] via-[#1a2633] to-[#0f1720]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="max-w-6xl w-full mx-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-[#263448] rounded-xl p-4 inline-block mb-4">
                <IconLogoAMR size="large" />
              </div>
              <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                AgendaSalas
              </h1>
              <p className="text-white/70 text-lg">
                Sistema de Reservas de Salas
              </p>
              <p className="text-white/50 text-sm mt-4">
                AMR Advogados • Abegg, Macorim & Rotta
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-1.5">
              <div className="text-xs text-white/40">
                © 2026 AMR Advogados • Abegg, Macorim & Rotta. Todos os direitos reservados.
              </div>
              <div className="text-[10px] text-white/25 tracking-wide">
                © 2026.08.18.v06 • Desenvolvido por Alvimar Godinho & IA
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-[#263448] mb-6 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              {isRegistering ? 'Criar Conta' : 'Bem-vindo'}
            </h2>

            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder={`seu.nome${DOMINIO_PERMITIDO}`}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="Mínimo 8 caracteres"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none"
                />
              </div>

              {authError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-sm text-red-700 whitespace-pre-line">{authError}</p>
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
              <p className="text-sm text-gray-500 text-center mb-6">
                Digite seu e-mail para receber o link de recuperação
              </p>

              <form onSubmit={handleResetPassword} className="space-y-4">
                <input
                  type="email"
                  value={resetEmail}
                  onChange={e => setResetEmail(e.target.value)}
                  required
                  placeholder={`seu.nome${DOMINIO_PERMITIDO}`}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none"
                />

                {resetMessage && (
                  <div className={`p-3 rounded-xl ${resetMessage.includes('✅') ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' : 'bg-red-50 border border-red-200 text-red-700'}`}>
                    <p className="text-sm">{resetMessage}</p>
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
                Voltar
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

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
              <p className="text-[9px] text-gray-500">© 2026.08.18.v06 • Desenvolvido por Alvimar Godinho & IA</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-gray-500">{nomeUsuarioLogado || user.email}</p>
            </div>
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

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
          <h2 className="text-lg font-bold mb-4 text-[#263448] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
            <div className="w-8 h-8 bg-[#263448]/10 rounded-lg flex items-center justify-center text-[#263448]">
              <IconFilter />
            </div>
            Filtros de Visualização
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Data Inicial</label>
              <input type="date" value={filtroDataInicio} onChange={e => setFiltroDataInicio(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E7BE92] outline-none text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Data Final</label>
              <input type="date" value={filtroDataFim} onChange={e => setFiltroDataFim(e.target.value)}
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
          {(filtroDataInicio !== new Date().toISOString().split('T')[0] || filtroDataFim !== new Date().toISOString().split('T')[0] || filtroSala || (isGestor && filtroStatus !== 'todas')) && (
            <button onClick={() => {
              setFiltroDataInicio(new Date().toISOString().split('T')[0]);
              setFiltroDataFim(new Date().toISOString().split('T')[0]);
              setFiltroSala('');
              setFiltroStatus('todas');
            }}
              className="mt-3 text-xs text-[#633627] hover:text-[#633627]/80 font-medium">
              Limpar filtros
            </button>
          )}
        </div>

        {isGestor && reservasPendentes.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
            <h2 className="text-lg font-bold mb-4 text-[#263448] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                <IconShield />
              </div>
              Aprovações Pendentes
              <span className="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{reservasPendentes.length}</span>
            </h2>
            <div className="space-y-3">
              {reservasPendentes.map(r => (
                <div key={r.id} className="p-4 rounded-xl border-l-4 border-amber-500 bg-amber-50 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-bold text-gray-800">{r.salas?.nome}</div>
                      <div className="text-xs text-gray-500">{emailParaNome[r.usuario_email] || r.usuario_email}</div>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-amber-200 text-amber-800 rounded-full">Aguardando</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-3 pb-3 border-b border-gray-200">
                    <div><div className="text-gray-400">Data</div><div className="font-medium">{r.data_reserva.split('-').reverse().join('/')}</div></div>
                    <div><div className="text-gray-400">Horário</div><div className="font-medium">{r.hora_inicio.substring(0, 5)} - {r.hora_fim.substring(0, 5)}</div></div>
                    <div><div className="text-gray-400">Pessoas</div><div className="font-medium">{r.quantidade_participantes}</div></div>
                  </div>

                  <div className="mb-3 pb-3 border-b border-gray-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 font-medium">Tipo:</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${r.tipo_reuniao === 'Interna' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                        {r.tipo_reuniao === 'Interna' ? '👥 Interna (Equipe AMR)' : '🌐 Externa (Clientes)'}
                      </span>
                    </div>
                    {r.observacao && r.observacao !== 'Sem observações' && (
                      <div>
                        <span className="text-xs text-gray-400 font-medium">Observações:</span>
                        <p className="text-xs text-gray-700 mt-1 bg-white p-2 rounded-lg border border-gray-200">
                          {r.observacao}
                        </p>
                      </div>
                    )}
                    {r.observacao === 'Sem observações' && (
                      <div className="text-xs text-gray-400 italic">Sem observações</div>
                    )}
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
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
          <h2 className="text-lg font-bold mb-4 text-[#263448] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
            <div className="w-8 h-8 bg-[#263448]/10 rounded-lg flex items-center justify-center text-[#263448]">
              <IconCalendar />
            </div>
            Ocupação das Salas
          </h2>
          <div className="space-y-3">
            {reservasFiltradas.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 text-gray-400">
                  <IconCalendar />
                </div>
                <p className="text-gray-600 text-sm">Nenhuma reserva encontrada para o período selecionado.</p>
              </div>
            ) : (
              reservasFiltradas.map(r => (
                <div key={r.id} className={`p-4 rounded-xl border-l-4 shadow-sm ${r.status === 'aprovada' ? 'border-emerald-500 bg-emerald-50' : r.status === 'pendente' ? 'border-amber-500 bg-amber-50' : 'border-red-500 bg-red-50'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-bold text-gray-800">{r.salas?.nome} — {r.tipo_reuniao}</div>
                      <div className="text-sm text-gray-600 mt-1 flex items-center gap-3">
                        <span className="flex items-center gap-1"><IconCalendar /> {r.data_reserva.split('-').reverse().join('/')}</span>
                        <span className="flex items-center gap-1"><IconClock /> {r.hora_inicio.substring(0, 5)} - {r.hora_fim.substring(0, 5)}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <IconUsers /> {emailParaNome[r.usuario_email] || r.usuario_email} • {r.quantidade_participantes} pessoas
                      </div>

                      {r.observacao && r.observacao !== 'Sem observações' ? (
                        <div className="text-xs text-gray-500 mt-2 flex items-start gap-1 bg-gray-50 p-2 rounded-lg border border-gray-100">
                          <span className="font-semibold text-gray-600 min-w-[70px]">Obs:</span>
                          {isGestor && editandoObsId === r.id ? (
                            <div className="flex-1 flex gap-2">
                              <input
                                type="text"
                                value={novaObsEditada}
                                onChange={e => setNovaObsEditada(e.target.value)}
                                className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#E7BE92] outline-none"
                                autoFocus
                              />
                              <button onClick={() => salvarObservacaoGestor(r.id)} className="text-emerald-600 hover:text-emerald-700 font-bold text-xs">Salvar</button>
                              <button onClick={() => setEditandoObsId(null)} className="text-red-600 hover:text-red-700 font-bold text-xs">X</button>
                            </div>
                          ) : (
                            <div className="flex-1 flex justify-between items-start gap-2">
                              <span className="break-words">{r.observacao}</span>
                              {isGestor && (
                                <button
                                  onClick={() => { setEditandoObsId(r.id); setNovaObsEditada(r.observacao || ''); }}
                                  className="text-[#633627] hover:text-[#633627]/80 text-xs font-semibold whitespace-nowrap"
                                  title="Editar observação"
                                >
                                  ✏️ Editar
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      ) : r.observacao === 'Sem observações' ? (
                        <div className="text-xs text-gray-400 mt-2 italic bg-gray-50 px-2 py-1 rounded border border-gray-100 inline-block">
                          Sem observações
                        </div>
                      ) : null}
                    </div>

                    <div className="flex items-center gap-2">
                      {r.status === 'pendente' && isGestor && (
                        <>
                          <button onClick={() => alterarStatusReserva(r.id, 'aprovada')}
                            className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition" title="Aprovar">
                            <IconCheck />
                          </button>
                          <button onClick={() => alterarStatusReserva(r.id, 'recusada')}
                            className="p-2 bg-white text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition" title="Recusar">
                            <IconX />
                          </button>
                        </>
                      )}
                      {(r.status === 'aprovada' || r.status === 'pendente') && (r.usuario_email === user.email || isGestor) && (
                        <button onClick={() => cancelarReserva(r.id)}
                          className="p-2 bg-white text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition" title="Cancelar">
                          <IconX />
                        </button>
                      )}
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${r.status === 'aprovada' ? 'bg-emerald-200 text-emerald-800' : r.status === 'pendente' ? 'bg-amber-200 text-amber-800' : 'bg-red-200 text-red-800'}`}>
                        {r.status === 'aprovada' ? 'Aprovada' : r.status === 'pendente' ? 'Pendente' : 'Recusada'}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <button
          onClick={() => {
            setDataReserva(hojeLocal);
            setSelectedSala('');
            setHoraInicio('');
            setHoraFim('');
            setTipoReuniao('Interna');
            setQtdParticipantes('');
            setObservacao('');
            setSemObservacao(false);
            document.getElementById('form-reserva')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="fixed bottom-6 right-6 bg-[#263448] text-white px-6 py-3 rounded-full shadow-2xl hover:bg-[#1a2633] transition flex items-center gap-2 font-semibold z-30"
        >
          <IconCalendar /> Solicitar Nova Reserva
        </button>

        <div id="form-reserva" className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mt-6">
          <h2 className="text-lg font-bold mb-4 text-[#263448] flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
            <div className="w-8 h-8 bg-[#263448]/10 rounded-lg flex items-center justify-center text-[#263448]">
              <IconCalendar />
            </div>
            Solicitar Nova Reserva
          </h2>

          <form onSubmit={handleNovaReserva} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Escolha a Sala</label>
              <select value={selectedSala} onChange={e => setSelectedSala(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none bg-white">
                <option value="" disabled>Selecione uma sala...</option>
                {salas.map(s => <option key={s.id} value={s.id}>{s.nome} (Máx: {s.capacidade_maxima} pessoas)</option>)}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Data</label>
                <input type="date" value={dataReserva} onChange={e => setDataReserva(e.target.value)} min={hojeLocal} required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tipo de Reunião</label>
                <select value={tipoReuniao} onChange={e => setTipoReuniao(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none bg-white">
                  <option value="Interna">Interna (Equipe AMR)</option>
                  <option value="Externa">Externa (Clientes)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Hora de Início</label>
                <input type="time" value={horaInicio} onChange={e => setHoraInicio(e.target.value)} required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Hora de Término</label>
                <input type="time" value={horaFim} onChange={e => setHoraFim(e.target.value)} required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantidade de Participantes</label>
              <input type="number" value={qtdParticipantes} onChange={e => setQtdParticipantes(e.target.value)} min="1" required
                placeholder="Ex: 5"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Observações / Detalhes da Reunião</label>
              <textarea
                value={observacao}
                onChange={e => { setObservacao(e.target.value); if (e.target.value.trim() !== '') setSemObservacao(false); }}
                disabled={semObservacao}
                rows={3}
                placeholder="Ex: Trazer projetor, coffee break, cliente externo..."
                className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none resize-none ${semObservacao ? 'bg-gray-100 text-gray-400' : 'border-gray-200'}`}
              />
              <label className="flex items-center gap-2 mt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={semObservacao}
                  onChange={e => { setSemObservacao(e.target.checked); if (e.target.checked) setObservacao(''); }}
                  className="w-4 h-4 text-[#263448] border-gray-300 rounded focus:ring-[#E7BE92]"
                />
                <span className="text-sm text-gray-600">Declaro que não há observações para esta reserva.</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={submitLoading}
              className="w-full bg-[#263448] text-white py-2.5 rounded-xl font-semibold hover:bg-[#1a2633] transition disabled:opacity-50"
            >
              {submitLoading ? 'Enviando...' : 'Confirmar Reserva'}
            </button>
          </form>
        </div>

        <footer className="mt-12 pb-6 text-center">
          <p className="text-[10px] text-gray-400">
            Desenvolvido por Alvimar Godinho & IA • v2026.08.19.01
          </p>
        </footer>
      </main>

      {showUserManagement && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#263448]" style={{ fontFamily: 'Georgia, serif' }}>
                Gerenciar Usuários
              </h2>
              <button onClick={() => setShowUserManagement(false)} className="text-gray-400 hover:text-gray-600">
                <IconX />
              </button>
            </div>

            <form onSubmit={adicionarFuncionario} className="flex flex-col sm:flex-row gap-2 mb-6">
              <input
                type="text"
                value={novoFuncionarioNome}
                onChange={e => setNovoFuncionarioNome(e.target.value)}
                placeholder="Nome completo do funcionário"
                required
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none"
              />
              <input
                type="email"
                value={novoFuncionarioEmail}
                onChange={e => setNovoFuncionarioEmail(e.target.value)}
                placeholder={`e-mail${DOMINIO_PERMITIDO}`}
                required
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E7BE92] outline-none"
              />
              <button type="submit"
                className="bg-[#263448] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#1a2633] transition whitespace-nowrap">
                Adicionar
              </button>
            </form>

            <div className="space-y-2">
              {funcionariosAtivos.map(f => (
                <div key={f.email} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-medium text-gray-800">{f.nome || f.email}</div>
                    <div className="text-xs text-gray-500">
                      {f.email} • {f.ativo ? '✅ Ativo' : '🚫 Desativado'}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleFuncionario(f.email, f.ativo)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${f.ativo ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'}`}
                    >
                      {f.ativo ? 'Desativar' : 'Reativar'}
                    </button>
                    <button
                      onClick={() => deletarFuncionario(f.email)}
                      className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-xs font-medium hover:bg-red-200 transition"
                    >
                      Deletar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showRoomManagement && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#263448]" style={{ fontFamily: 'Georgia, serif' }}>
                Gerenciar Salas
              </h2>
              <button onClick={() => setShowRoomManagement(false)} className="text-gray-400 hover:text-gray-600">
                <IconX />
              </button>
            </div>

            <div className="space-y-2">
              {salas.map(s => (
                <div key={s.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-medium text-gray-800">{s.nome}</div>
                    <div className="text-xs text-gray-500">
                      Capacidade: {s.capacidade_maxima} pessoas • {s.ativo ? '✅ Ativa' : '🚫 Desativada'}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSalaAtiva(s.id, s.ativo)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${s.ativo ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'}`}
                  >
                    {s.ativo ? 'Desativar' : 'Ativar'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}