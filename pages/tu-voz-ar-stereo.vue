<script setup lang="ts">
  const name = ref('')
  const email = ref('')
  const lastName = ref('')
  const phone = ref('')
  const participatesAs = ref('solista')
  const registerIsDisabled = ref(true)
  const acceptTerms = (event: Event) => {
    if (event.target) {
      const target = event.target as HTMLInputElement
      registerIsDisabled.value = !target.checked
    }
  }
</script>
<template>
  <section
    class="flex flex-col items-center justify-center w-full h-auto bg-center bg-no-repeat bg-cover md:h-64 lg:h-auto bg-[url('/cover-arstereo.jpg')]"
  >
    <div
      class="flex flex-col items-center justify-center w-full h-full bg-black/30 backdrop-blur-sm"
    >
      <div class="flex justify-center w-9/12 h-auto py-8 rounded-2xl">
        <div class="box-border flex-wrap w-full h-auto p-5 text-white bg-black/90 rounded-l-2xl">
          <h4 class="text-gold">Formulario de Inscripción</h4>
          <p>
            Antes de llanar el formulario, lea detenidamente los terminos y condiciones del concurso
          </p>
          <br />
          <form>
            <div class="grid grid-cols-2 gap-2 py-2">
              <fieldset>
                <Input
                  id="name"
                  v-model="name"
                  label="Nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  help="Escribe tu nombre"
                  required
                />
              </fieldset>
              <fieldset>
                <Input
                  id="lastName"
                  v-model="lastName"
                  label="Apeliido"
                  type="text"
                  placeholder="Escribe tu apellido"
                  help="Escribe tu apellido"
                  required
                />
              </fieldset>
              <fieldset>
                <Input
                  id="email"
                  v-model="email"
                  label="Email"
                  type="email"
                  placeholder="Escribe tu email"
                  help="Escribe tu email"
                  required
                />
              </fieldset>
              <fieldset>
                <Input
                  id="phone"
                  v-model="phone"
                  label="Teléfono"
                  type="text"
                  placeholder="Escribe tu teléfono"
                  help="Escribe tu teléfono"
                  required
                />
              </fieldset>
            </div>

            <div class="grid grid-cols-2 gap-2 py-2">
              <fieldset class="flex flex-col gap-2">
                <p>Participa como:</p>
                <div>
                  <input
                    id="type"
                    v-model="participatesAs"
                    type="radio"
                    name="participates_as"
                    class="mr-2 size-4"
                    value="solista"
                  />
                  <label for="type" class="text-white">Solista</label>
                </div>
                <div>
                  <input
                    id="type"
                    v-model="participatesAs"
                    type="radio"
                    name="participates_as"
                    class="mr-2 size-4"
                    value="duo"
                  />
                  <label for="type" class="text-white">Duo</label>
                </div>
                <div>
                  <input
                    id="type"
                    v-model="participatesAs"
                    type="radio"
                    name="participates_as"
                    class="mr-2 size-4"
                    value="grupo"
                  />
                  <label for="type" class="text-white">Grupo</label>
                </div>
              </fieldset>
            </div>

            <div class="flex p-2 mt-4">
              <input id="terms" type="checkbox" class="mr-2" @click="acceptTerms" />
              <label for="terms" class="text-white font-extralight">
                Acepto los términos y condiciones
              </label>
            </div>
            <Button
              class="float-right font-bold cursor-pointer"
              value="Registrarse"
              size="sm"
              theme="gold"
              :disabled="registerIsDisabled"
            />
          </form>
        </div>
        <div class="w-full h-auto text-black bg-white rounded-r-2xl">
          <div class="p-6">
            <img
              src="../assets/img/banner.png"
              alt="Logo del Evento"
              class="w-32 h-32 mx-auto mb-4"
            />
            <h2 class="text-2xl font-bold text-center text-black">Terminos y Condiciones</h2>
            <p class="mt-4 text-sm text-justify text-black">
              Para participar en el evento, los participantes deben cumplir con los siguientes
              requisitos:
            </p>
            <ul class="mt-2 ml-4 text-sm text-black list-disc">
              <li>Ser mayor de 18 años.</li>
              <li>Completar el formulario de inscripción correctamente.</li>
              <li>Respetar las fechas y horarios establecidos.</li>
              <li>Seguir las normas de conducta del evento.</li>
            </ul>
            <h3 class="mt-6 text-xl font-semibold text-black">Reglamentos del Evento</h3>
            <p class="mt-4 text-sm text-justify text-black">
              El evento se regirá bajo las siguientes normativas:
            </p>
            <ol class="mt-2 ml-4 text-sm text-black list-decimal">
              <li>Los participantes deben presentarse con puntualidad en el lugar asignado.</li>
              <li>Está prohibido el uso de lenguaje ofensivo o conductas inapropiadas.</li>
              <li>
                La organización se reserva el derecho de descalificar a cualquier participante que
                incumpla las normas.
              </li>
              <li>Las decisiones del jurado serán finales e inapelables.</li>
            </ol>
            <p class="mt-6 text-sm text-justify text-black">
              Para más información, por favor contacta a los organizadores del evento.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
